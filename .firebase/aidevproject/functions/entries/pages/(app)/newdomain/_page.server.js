import { f as firestore } from "../../../../chunks/index.js";
import { r as redirect } from "../../../../chunks/index2.js";
import { setDoc, doc } from "firebase/firestore";
import { i as initiateCrawler } from "../../../../chunks/crawler.js";
const actions = {
  default: async ({ request }) => {
    let dateOfCreation = Date.now();
    const formData = await request.formData();
    const newDomain = formData.get("newDomain");
    let newEntry = newDomain.replace("https://", "");
    await setDoc(doc(firestore, "domain", newEntry), { status: "added" });
    initiateCrawler(newDomain, dateOfCreation);
    throw new redirect(307, "/");
  }
};
export {
  actions
};
