import { a as patchEsm, g as globals, b as bootstrapLazy } from './core-b0e1e16e.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    globals();
    bootstrapLazy([["children-component",[[1,"children-component"]]],["my-component",[[1,"my-component",null,[[0,"todoCompleted","todoCompletedHandler"]]]]]], options);
  });
};

export { defineCustomElements };
