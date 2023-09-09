import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, b as add_attribute, a as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
import "firebase/auth";
import { C as Collection } from "../../../chunks/Collection.js";
import "firebase/firestore";
import "firebase/storage";
import { twMerge } from "tailwind-merge";
const SearchOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { strokeLinecap = "round" } = $$props;
  let { strokeLinejoin = "round" } = $$props;
  let { strokeWidth = "2" } = $$props;
  let { ariaLabel = "search outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section><div class="flex items-center justify-between bg-slate-500 px-8 py-4 text-slate-100"><h3 class="text-2xl font-semibold" data-svelte-h="svelte-pux2mx">Domains</h3> <div class="flex items-center gap-4"><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">${validate_component(SearchOutline, "SearchOutline").$$render($$result, { class: "text-gray-400" }, {}, {})}</div> <input type="text" id="table-search" class="block w-80 rounded-lg border border-gray-300 bg-slate-200 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for items"></div> <a href="/newdomain" class="rounded bg-gray-800 px-2 py-1 hover:bg-gray-600" data-svelte-h="svelte-1xblsdk">Add Domain</a></div></div> <ol class="w-full pt-0"> ${validate_component(Collection, "Collection").$$render($$result, { ref: "domain" }, {}, {
    loading: () => {
      return `<p slot="loading" class="absolute text-4xl" data-svelte-h="svelte-easkzb">Loading...</p>`;
    },
    default: ({ data }) => {
      return `${each(data, (domain, index) => {
        return `<li class="group flex w-full items-center border-y py-1 bg-white hover:border-slate-400"><p class="ml-4 w-8">${escape(index + 1)}.</p> <p class="text-lg">${escape(domain.id)}</p> <div class="ml-auto flex items-center gap-12"><p class="${[
          "border-inherrit w-20 rounded border px-2 text-center text-sm",
          (domain.status == "added" ? "bg-yellow-200" : "") + " " + (domain.status == "finished" ? "bg-green-200" : "") + " " + (domain.status == "aborted" ? "bg-red-200" : "") + " " + (domain.status == "aborted" ? "bg-blue-200" : "")
        ].join(" ").trim()}">${escape(domain.status)}</p> <a href="${"domain/" + escape(domain.id, true)}" type="button" class="mr-6 rounded-lg border border-gray-300 bg-white px-2 py-1 text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Continue</a></div> </li>`;
      })}`;
    }
  })} </ol></section>`;
});
export {
  Page as default
};
