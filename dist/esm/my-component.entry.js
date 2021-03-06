import { r as registerInstance, h, H as Host } from './core-b0e1e16e.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    todoCompletedHandler(event) {
        console.log('funfou: ', event);
    }
    render() {
        return (h(Host, null, h("h1", null, "Hello"), h("children-component", null)));
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
