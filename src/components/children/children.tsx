import { Component, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'children-component',
  shadow: true
})

export class ChildrenComponent {

  @Event() todoCompleted: EventEmitter;

  todoCompletedHandlert() {
    this.todoCompleted.emit(true);
  }

  render() {
    return (
      <Host>
        <blockquote onClick={() => this.todoCompletedHandlert()}>
          Click me
        </blockquote>
      </Host>
    )  
  }
}
