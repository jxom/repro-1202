

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a2c5708d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7cf2deec.js","_app/immutable/chunks/singletons.454040f9.js"];
export const stylesheets = [];
export const fonts = [];
