import { r as registerInstance, c as createEvent, h, H as Host } from './core-1ff19f58.js';

const ChildrenComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.todoCompleted = createEvent(this, "todoCompleted", 7);
    }
    todoCompletedHandlert() {
        this.todoCompleted.emit(true);
    }
    render() {
        return (h(Host, null, h("blockquote", { onClick: () => this.todoCompletedHandlert() }, "Click me")));
    }
};

export { ChildrenComponent as children_component };
