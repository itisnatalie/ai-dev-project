

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0ad08a34.js","_app/immutable/chunks/scheduler.0355249e.js","_app/immutable/chunks/index.0bee43c3.js","_app/immutable/chunks/index.esm2017.1d548bfd.js"];
export const stylesheets = ["_app/immutable/assets/0.22af870a.css"];
export const fonts = [];
