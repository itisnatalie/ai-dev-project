import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_object, l as escape_attribute_value, v as validate_store, s as subscribe, e as escape, a as validate_component, d as each } from "../../../../../../chunks/ssr.js";
import "firebase/auth";
import { C as Collection } from "../../../../../../chunks/Collection.js";
import "firebase/firestore";
import "firebase/storage";
import { p as page } from "../../../../../../chunks/stores.js";
import { twMerge } from "tailwind-merge";
const AngleDownSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "angle down solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 14 8" }
    ],
    {}
  )}><path fill="currentColor" d="M6.983 8a1.935 1.935 0 0 1-1.4-.615L.253 1.697a.996.996 0 0 1 .768-1.66 1 1 0 0 1 .692.297l5.27 5.629 5.27-5.629a1 1 0 0 1 1.676 1.032.997.997 0 0 1-.216.331L8.387 7.384A1.93 1.93 0 0 1 6.983 8Z"></path></svg> `;
});
const AngleLeftSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  let { size = "md" } = $$props;
  let { role = "img" } = $$props;
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { ariaLabel = "angle left solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 8 14" }
    ],
    {}
  )}><path fill="currentColor" d="M6.985 14a.992.992 0 0 1-.681-.27L.614 8.408a1.905 1.905 0 0 1 0-2.803L6.304.286a.998.998 0 1 1 1.363 1.458L2.038 7.01l5.629 5.263A.998.998 0 0 1 6.985 14Z"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { id, date } = $page.params;
  $$unsubscribe_page();
  return `<section class=""><div class="flex flex-col bg-slate-500 p-4 text-slate-100"><div class="mx-4 flex items-center justify-between"><div class="flex gap-8 items-center"><a href="${"/domain/" + escape(id, true)}">${validate_component(AngleLeftSolid, "AngleLeftSolid").$$render($$result, { class: "w-8 h-8" }, {}, {})}</a> <h3 class="text-3xl font-semibold">${escape(id)}</h3></div> <h3 class="ml-10 text-3xl font-semibold">${escape(date)}</h3></div></div> ${validate_component(Collection, "Collection").$$render(
    $$result,
    {
      ref: `domain/${id}/dateofscan/${date}/scannedurls`
    },
    {},
    {
      default: ({ data }) => {
        return `<ol>${each(data, (url, index) => {
          return `<li class="border-y py-1"><div class="ml-4 flex content-center items-center text-lg"><div class="item-start flex gap-2"><p>${escape(index + 1)}.</p> <p>${escape(url.id)}</p></div> <div class="ml-auto flex items-baseline gap-4"><p>${escape(url.meta.title)}</p>
							load more
							${validate_component(AngleDownSolid, "AngleDownSolid").$$render($$result, { class: "h-4 w-4" }, {}, {})} <div></div> </div></div> </li>`;
        })}</ol>`;
      }
    }
  )}</section>`;
});
export {
  Page as default
};
