import { r as redirect } from "../../../chunks/index2.js";
const actions = {
  default: async ({ request, url }) => {
    throw redirect(307, "/");
  }
};
export {
  actions
};
