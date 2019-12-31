'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3941216d.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.globals();
    core.bootstrapLazy([["children-component.cjs",[[1,"children-component"]]],["my-component.cjs",[[1,"my-component",null,[[0,"todoCompleted","todoCompletedHandler"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
