import { Component, OnInit, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<input type="text" #input>
  <button (click)="shareData(input.value)">send</button>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() shareDataEvent = new EventEmitter();
 

  constructor()
   {
    }

  ngOnInit() {
  }
shareData(value)
{
  this.shareDataEvent.emit(value);
}
}
