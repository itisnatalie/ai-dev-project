

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/help/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.53b7b088.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js"];
export const stylesheets = [];
export const fonts = [];
