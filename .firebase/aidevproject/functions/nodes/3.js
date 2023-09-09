import * as server from '../entries/pages/(app)/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e343af27.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/index.esm2017.1d548bfd.js","_app/immutable/chunks/Collection.629e2a85.js","_app/immutable/chunks/index.48e1a440.js","_app/immutable/chunks/SearchOutline.3651b022.js","_app/immutable/chunks/tw-merge.462f0304.js"];
export const stylesheets = [];
export const fonts = [];
