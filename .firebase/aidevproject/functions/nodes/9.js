import * as server from '../entries/pages/crawler/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/crawler/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/crawler/+page.server.js";
export const imports = ["_app/immutable/nodes/9.ed155fc7.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = [];
export const fonts = [];
