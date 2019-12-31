import { h, Host } from "@stencil/core";
export class ChildrenComponent {
    todoCompletedHandlert() {
        this.todoCompleted.emit(true);
    }
    render() {
        return (h(Host, null,
            h("blockquote", { onClick: () => this.todoCompletedHandlert() }, "Click me")));
    }
    static get is() { return "children-component"; }
    static get encapsulation() { return "shadow"; }
    static get events() { return [{
            "method": "todoCompleted",
            "name": "todoCompleted",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
