import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child1 (shareDataEvent)="message.receiveMessage($event)"></app-child1>
  <app-child2 #message></app-child2>  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
