import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
@Output() public childEvent=new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
fireEvent()
{
  this.childEvent.emit("this is   a text from child class");
}
}
