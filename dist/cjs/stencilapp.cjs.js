'use strict';

const core = require('./core-3941216d.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["children-component.cjs",[[1,"children-component"]]],["my-component.cjs",[[1,"my-component",null,[[0,"todoCompleted","todoCompletedHandler"]]]]]], options);
});
