import { w as writable } from "./index3.js";
const language = writable("en");
async function handle({ event, resolve }) {
  let headerLanguage = event.request.headers.get("accept-language").split(",").at(0);
  language.set(
    headerLanguage
  );
  const response = await resolve(event);
  return response;
}
export {
  handle
};
