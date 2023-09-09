import * as universal from '../entries/pages/(app)/newdomain/_page.js';
import * as server from '../entries/pages/(app)/newdomain/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/newdomain/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/newdomain/+page.js";
export { server };
export const server_id = "src/routes/(app)/newdomain/+page.server.js";
export const imports = ["_app/immutable/nodes/8.dd1c6aee.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/forms.7cb255b4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.104e32fa.js","_app/immutable/chunks/index.48e1a440.js"];
export const stylesheets = [];
export const fonts = [];
