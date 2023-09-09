import { i as initiateCrawler } from "../../../chunks/crawler.js";
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const domain = formData.get("domain");
    const response = await initiateCrawler(domain);
    return { success: true, crawlResult: response };
  }
};
export {
  actions
};
