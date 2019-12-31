import { Component, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {

  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent) {
    console.log('funfou: ', event);
  }

  render() {
    return (
      <Host>
        <h1>Hello</h1>
        
        <children-component></children-component>
      </Host>
    )  
  }
}
