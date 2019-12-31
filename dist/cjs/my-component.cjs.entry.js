'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3941216d.js');

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    todoCompletedHandler(event) {
        console.log('funfou: ', event);
    }
    render() {
        return (core.h(core.Host, null, core.h("h1", null, "Hello"), core.h("children-component", null)));
    }
    static get style() { return ""; }
};

exports.my_component = MyComponent;
