import { CheerioCrawler } from "crawlee";
import { Actor } from "apify";
import { f as firestore } from "./index.js";
import { doc, updateDoc, setDoc } from "firebase/firestore";
function scrapAllData($) {
  return {
    meta: scrapMetaData($),
    body: scrapBodyData($),
    social: scrapSocialData($),
    schema: scrapSchemaData($)
  };
}
function scrapMetaData($) {
  return {
    title: $("title").text(),
    description: $('meta[name="description"]').attr("content"),
    canonical: $('link[rel="canonical"]').attr("href"),
    alternates: getAllObjects($, 'link[rel="alternate"][hreflang]', ["href", "hreflang"])
  };
}
function scrapBodyData($) {
  return {
    headlines: {
      h1: getAllObjects($, "h1", ["text"]),
      h2: getAllObjects($, "h2", ["text"]),
      h3: getAllObjects($, "h3", ["text"]),
      h4: getAllObjects($, "h4", ["text"]),
      h5: getAllObjects($, "h5", ["text"]),
      h6: getAllObjects($, "h6", ["text"])
    },
    images: getAllObjects($, "img", ["src", "alt"])
  };
}
function scrapSocialData($) {
  return {
    title: $('meta[property="og:title"]').attr("content"),
    description: $('meta[property="og:description"]').attr("content"),
    image: $('meta[property="og:image"]').attr("content")
  };
}
function scrapSchemaData($) {
  return processJson($('script[type="application/ld+json"]').html());
}
function processJson(data) {
  return JSON.stringify(JSON.parse(data), null, 2);
}
function getAllObjects($, selector, attributes) {
  return $(selector).map(function() {
    const element = $(this);
    const result = {};
    attributes.forEach((attr) => {
      if (attr === "text") {
        result[attr] = element.text();
      } else {
        result[attr] = element.attr(attr);
      }
    });
    return result;
  }).get();
}
async function initiateCrawler(domain, dateOfScan) {
  let newEntry = domain.replace("https://", "");
  let docRef = doc(firestore, `domain/${newEntry}`);
  await updateDoc(docRef, { status: "scanning" });
  await setDoc(doc(firestore, `domain/${newEntry}/dateofscan/${dateOfScan}`), {});
  let config = getConfig(domain);
  await Actor.init();
  const requestQueue = await Actor.openRequestQueue(config.queueName);
  const requestDataset = await Actor.openDataset(config.datasetName);
  const crawler = new CheerioCrawler({
    requestQueue,
    // passing the new unique queue
    // Use the requestHandler to process each of the crawled pages.
    async requestHandler({ request, $, enqueueLinks }) {
      requestDataset.pushData({ url: request.loadedUrl, data: scrapAllData($) });
      await enqueueLinks({ globs: config.domainPattern });
    }
  });
  await crawler.run([domain]);
  let scrapedData = await requestDataset.getData();
  scrapedData.items.map((item) => {
    let slug = item.url.split("/").at(-1);
    if (slug == "")
      slug = "home";
    setDoc(doc(firestore, `domain/${newEntry}/dateofscan/${dateOfScan}/scannedurls/${slug}`), {
      meta: item.data.meta,
      social: item.data.social,
      headlines: item.data.body.headlines,
      images: item.data.body.images,
      schema: item.data.schema
    });
  });
  console.log(scrapedData.items);
  await updateDoc(doc(firestore, `domain/${newEntry}/dateofscan/${dateOfScan}`), { totalPages: scrapedData.items.length });
  await updateDoc(docRef, { status: "finished" });
}
function getConfig(domain) {
  let timeStamp = (/* @__PURE__ */ new Date()).getTime().toString();
  return {
    queueName: domain + "-" + timeStamp + "-queue",
    datasetName: domain + "-" + timeStamp + "-dataset",
    domainPattern: [`${domain}/**`]
  };
}
export {
  initiateCrawler as i
};
