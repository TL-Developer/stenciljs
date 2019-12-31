import { h, Host } from "@stencil/core";
export class MyComponent {
    todoCompletedHandler(event) {
        console.log('funfou: ', event);
    }
    render() {
        return (h(Host, null,
            h("h1", null, "Hello"),
            h("children-component", null)));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get listeners() { return [{
            "name": "todoCompleted",
            "method": "todoCompletedHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
