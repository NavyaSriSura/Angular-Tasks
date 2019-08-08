import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-child2',
  template: `<div>Child2</div>  {{message}}
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message:string="Initial message";

  constructor() { }

  ngOnInit() {
  }
  receiveMessage(value) {
    this.message=value;
  }
}
