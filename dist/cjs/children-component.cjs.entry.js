'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3941216d.js');

const ChildrenComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.todoCompleted = core.createEvent(this, "todoCompleted", 7);
    }
    todoCompletedHandlert() {
        this.todoCompleted.emit(true);
    }
    render() {
        return (core.h(core.Host, null, core.h("blockquote", { onClick: () => this.todoCompletedHandlert() }, "Click me")));
    }
};

exports.children_component = ChildrenComponent;
