import { i as initiateCrawler } from "../../../chunks/crawler.js";
const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const domain = formData.get("domain");
      const response = await initiateCrawler(domain);
      return { success: true, crawlResult: response };
    } catch (err) {
      console.error("Error on server side:", err);
      return { success: false, crawlResult: "An unexpected error occurred. Please try again." };
    }
  }
};
export {
  actions
};
