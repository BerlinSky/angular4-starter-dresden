import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.pug',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent  implements OnInit {
  @Input() content: string;
  @Output() update = new EventEmitter();
  // onClick(value: string) {
  //   console.log('clicked', value);
  // }

  onMouseOver(value: string) {
    console.log('mouse over', value);
  }

  constructor() { }
  ngOnInit() { }
}
