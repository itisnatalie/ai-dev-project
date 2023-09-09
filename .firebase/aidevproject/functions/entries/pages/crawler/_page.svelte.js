import { c as create_ssr_component, b as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let crawlResult;
  let isSuccess;
  let { form } = $$props;
  let domain;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    {
      if (form && form.success) {
        setTimeout(
          () => {
          },
          3e3
        );
      } else {
        console.error("Failed to submit form");
      }
    }
  }
  crawlResult = form?.crawlResult;
  isSuccess = form?.success;
  return `<div class="flex h-screen w-full flex-col p-3"><div class="mb-8 rounded-lg bg-gray-300 p-3 shadow"><div class="mb-4 text-center text-lg font-bold" data-svelte-h="svelte-1955vww">Simple Form</div> <div class="mb-4 text-center text-sm" data-svelte-h="svelte-srkeac">Crawl a domain</div> <form action="" method="post" class="flex flex-col"><label class="font-meduim text-sm uppercase">Specify the domain
				<input name="domain" class="mb-2 w-full rounded border p-1"${add_attribute("value", domain, 0)}></label> <button ${"disabled"}${add_attribute("class", `${"bg-slate-900/60"} mx-auto mt-2 w-1/2 rounded-md p-2 text-lg font-semibold text-slate-100`, 0)}>Submit</button></form></div> ${crawlResult && isSuccess ? `<p class="mb-4">Count: ${escape(crawlResult.items.length)}</p> ${each(Object.keys(crawlResult.items), (item) => {
    return `<div class="mb-4 flex w-full flex-col rounded-lg bg-slate-400/60 p-2 text-left shadow"> <p class="font-semiblod mb-3 text-slate-900"><code>${escape(crawlResult.items[item].url)}</code></p> <p data-svelte-h="svelte-14g2o2w">Title:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.meta.title)}</p> <p data-svelte-h="svelte-1k1qlm4">Description:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.meta.description)}</p> <p data-svelte-h="svelte-180st0s">Canonical:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.meta.canonical)}</p> <p data-svelte-h="svelte-16cxsvs">Alternate:</p> ${each(crawlResult.items[item].data.meta.alternates, (item2) => {
      return `<p class="text-slate-600">${escape(item2.hreflang)}: ${escape(item2.href)}</p>`;
    })}  <p data-svelte-h="svelte-xlgrtb">H1:</p> ${each(crawlResult.items[item].data.body.headlines.h1, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-xoa8ks">H2:</p> ${each(crawlResult.items[item].data.body.headlines.h2, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-xou3f1">H3:</p> ${each(crawlResult.items[item].data.body.headlines.h3, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-xj0tju">H4:</p> ${each(crawlResult.items[item].data.body.headlines.h4, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-xj9rd7">H5:</p> ${each(crawlResult.items[item].data.body.headlines.h5, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-xm38ug">H6:</p> ${each(crawlResult.items[item].data.body.headlines.h6, (item2) => {
      return `<li class="text-slate-600">${escape(item2.text)}</li>`;
    })} <p data-svelte-h="svelte-1efmrc0">Images:</p> ${each(crawlResult.items[item].data.body.images, (item2) => {
      return `<li class="text-slate-600">${escape(item2.src)} <p class="text-slate-700">${escape(item2.alt)}</p> </li>`;
    })}  <p data-svelte-h="svelte-1kj0002">OG Title:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.social.title)}</p> <p data-svelte-h="svelte-oxq08u">OG Description:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.social.description)}</p> <p data-svelte-h="svelte-l4xc1n">OG Image:</p> <p class="text-slate-600">${escape(crawlResult.items[item].data.social.image)}</p>  <p data-svelte-h="svelte-inty6b">Schema:</p> <pre class="my-2 rounded-md bg-slate-200 p-2">					<code class="block max-w-full overflow-x-auto whitespace-pre-wrap break-words">
						${escape(crawlResult.items[item].data.schema)}
					</code>
				</pre> </div>`;
  })}` : `${crawlResult && !isSuccess ? `<p>${escape(crawlResult)}</p>` : ``}`}</div>`;
});
export {
  Page as default
};
