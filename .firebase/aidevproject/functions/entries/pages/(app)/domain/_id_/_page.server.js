import { i as initiateCrawler } from "../../../../../chunks/crawler.js";
const actions = {
  default: async ({ request }) => {
    let formData = await request.formData();
    let domainId = formData.get("domainid");
    let dateOfScan = Date.now();
    const rescanDomain = `https://${domainId}`;
    initiateCrawler(rescanDomain, dateOfScan);
  }
};
export {
  actions
};
