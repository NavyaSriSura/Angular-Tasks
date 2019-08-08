import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() EventEmitter=new EventEmitter<string>();

  public receiveMessage(value)

  {
    this.EventEmitter.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
