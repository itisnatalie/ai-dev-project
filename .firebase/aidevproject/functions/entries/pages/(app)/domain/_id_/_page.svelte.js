import { c as create_ssr_component, v as validate_store, s as subscribe, a as validate_component, e as escape, b as add_attribute, d as each } from "../../../../../chunks/ssr.js";
import "firebase/auth";
import { C as Collection } from "../../../../../chunks/Collection.js";
import "firebase/firestore";
import "firebase/storage";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { id } = $page.params;
  $$unsubscribe_page();
  return `<section class="w-full">${validate_component(Collection, "Collection").$$render($$result, { ref: `domain/${id}/dateofscan` }, {}, {
    default: ({ data, count }) => {
      return `<div class="flex flex-col bg-slate-500 p-4 text-slate-100"><div class="flex items-center justify-between"><h3 class="ml-10 text-3xl font-semibold">${escape(id)}</h3> <label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div> <input type="text" id="table-search" class="block w-80 rounded-lg border border-gray-300 bg-slate-200 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for items"></div></div> <div class="flex justify-between content-center pt-4 px-8"><p data-svelte-h="svelte-177vv5i">date of scan</p> <p data-svelte-h="svelte-1afrbw">scanned pages</p> <form method="POST"><input hidden${add_attribute("value", id, 0)} name="domainid"> <button class="bg-slate-200 text-slate-900 px-2.5 py-1 rounded hover:bg-green-200" data-svelte-h="svelte-gjbjz5">New scan</button></form></div></div> <ol>${each(data, (domain, index) => {
        return `<li class="flex w-full items-center p-2"><p class="ml-4 w-8">${escape(index + 1)}.</p> <p class="text-lg">${escape(new Date(parseInt(domain.id)))}</p> <p class="text-lg">${escape(domain.totalPages)}</p> <p class="ml-auto mr-4"><a href="${escape($page.url.pathname, true) + "/" + escape(domain.id, true)}" type="button" class="rounded-lg border border-gray-300 bg-white px-2 py-1 text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Continue</a></p> </li>`;
      })}</ol>`;
    }
  })}</section>`;
});
export {
  Page as default
};
