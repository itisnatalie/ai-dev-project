import * as server from '../entries/pages/login/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/10.86b364fc.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/forms.7cb255b4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.104e32fa.js","_app/immutable/chunks/index.48e1a440.js"];
export const stylesheets = [];
export const fonts = [];
