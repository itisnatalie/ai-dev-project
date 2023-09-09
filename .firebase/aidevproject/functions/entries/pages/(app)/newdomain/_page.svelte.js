import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let success = false;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    {
      if (form && form.success) {
        success = true;
        setTimeout(
          () => {
            success = false;
          },
          3e3
        );
      } else {
        console.error("Failed to submit form");
      }
    }
  }
  return `<section><div class="bg-slate-100 px-12"><form class="flex gap-6 py-6" method="POST"><div class="w-full"><label for="email" class="mb-2 block text-sm font-medium text-gray-900" data-svelte-h="svelte-17825qa">New Domain - add domain &#39;www.domain...&#39; format</label> <input name="newDomain" type="string" id="newDomain" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="e.g. www.tangit.sk" required></div> <button type="submit" class="shrink-0 mb-0.5 h-min self-end rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-800" data-svelte-h="svelte-pfjx9j">Add and scan</button></form> ${success ? `<p class="text-4xl text-green-400" data-svelte-h="svelte-zqb85z">Domain has been added</p>` : ``}</div></section>`;
});
export {
  Page as default
};
