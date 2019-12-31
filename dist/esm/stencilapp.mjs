import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-b0e1e16e.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["children-component",[[1,"children-component"]]],["my-component",[[1,"my-component",null,[[0,"todoCompleted","todoCompletedHandler"]]]]]], options);
});
