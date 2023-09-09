

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d56c6e92.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/stores.c6a7f88f.js","_app/immutable/chunks/singletons.104e32fa.js","_app/immutable/chunks/index.48e1a440.js"];
export const stylesheets = [];
export const fonts = [];
