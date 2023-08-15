<script>
	import { placeholder } from '$lib/store.js';
	import { enhance } from '$app/forms';
	import Spinner from '$lib/components/Spinner.svelte';
	export let form;
	let domain;
	let success = false;

	$: {
		if (form && form.success) {
			success = true;
			setTimeout(() => {
				success = false;
			}, 3000);
		} else {
			console.error('Failed to submit form');
		}
	}

	$: crawlResult = form?.crawlResult;
	$: {
		console.log(crawlResult);
	}
</script>

<section class="container mx-auto flex min-h-screen max-w-5xl flex-col">
	<h2 class="mt-10 text-center text-3xl font-semibold text-slate-900">URL To scan</h2>
	<div class="mt-4 w-full rounded-xl bg-slate-300/60">
		<form
			class="mx-auto mt-2 flex w-full gap-4 p-8"
			method="POST"
			use:enhance={() => {
				success = true;

				return async ({ update }) => {
					await update();
					success = false;
				};
			}}
		>
			<div class="flex w-full flex-col">
				<label class="text-medium mb-2 font-medium" for="domain">URL </label>
				<input
					id="domain"
					bind:value={domain}
					name="domain"
					placeholder={$placeholder.url}
					type="text"
					class="rounded-md border p-1"
				/>
			</div>

			<!-- <div class="flex flex-col">
				<label for="count" class="mb-2 font-medium">count</label>
				<input
					id="count"
					bind:value={count}
					name="count"
					type="number"
					class="w-16 rounded-md border p-1"
				/>
			</div> -->
			<button
				type="submit"
				disabled={success}
				class={`${
					!success ? 'bg-slate-800' : ' bg-slate-800/50'
				} w-48 self-end rounded-md px-2 py-1 font-medium text-slate-100`}>Scan</button
			>
		</form>
		{#if success}
			<Spinner />
		{/if}
		{#if crawlResult && !success}
			<ul class="m-4 overflow-hidden rounded-xl p-2">
				{#each crawlResult.items as item, i}
					<li
						key={i}
						class="mx-2 flex p-2
						 text-lg odd:text-slate-800 even:bg-slate-300 even:text-slate-900"
					>
						<p>
							{i + 1 + '.'}
						</p>
						<p class="mr-2 w-full text-right">
							{item.url}
						</p>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
