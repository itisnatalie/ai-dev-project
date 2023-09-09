import * as server from '../entries/pages/(app)/domain/_id_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/domain/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/domain/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.3be35b40.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/index.esm2017.1d548bfd.js","_app/immutable/chunks/Collection.629e2a85.js","_app/immutable/chunks/index.48e1a440.js","_app/immutable/chunks/stores.a8d6a1d2.js","_app/immutable/chunks/singletons.0d459695.js"];
export const stylesheets = [];
export const fonts = [];
