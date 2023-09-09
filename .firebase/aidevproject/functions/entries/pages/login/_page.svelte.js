import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let login;
  let password;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex min-h-screen w-full flex-col justify-center"><div class="mt-[20vh]"><div class="m-4 text-center"><h1 class="text-3xl font-bold" data-svelte-h="svelte-1vb7sh6">Login</h1></div> <form method="POST" class="container mx-auto flex max-w-lg flex-col rounded-lg bg-slate-300/60 p-6 shadow"><label class="font-meduim text-sm uppercase">Login
				<input name="login" type="text" class="mb-2 w-full rounded border p-1"${add_attribute("value", login, 0)}></label> <label class="font-meduim text-sm uppercase">Password
				<input name="password" type="password" class="mb-2 w-full rounded border p-1"${add_attribute("value", password, 0)}></label> <button class="ml-auto mt-2 w-1/2 rounded-md bg-slate-900 p-2 text-lg font-semibold text-slate-100" data-svelte-h="svelte-d6s9bh">Login</button></form></div> <div class="mt-auto flex flex-col items-center justify-center"><h1 class="text-3xl font-bold" data-svelte-h="svelte-1ieysd9">Welcome to SvelteKit</h1> <p>Visit <a class="text-blue-600" href="https://kit.svelte.dev" data-svelte-h="svelte-txe8kv">kit.svelte.dev</a> to read the documentation</p></div></div>`;
});
export {
  Page as default
};
