import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.pug',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent  implements OnInit {
  @Input() message: string;

  onClick(value: string) {
    console.log('clicked', value);
  }

  onMouseOver(value: string) {
    console.log('mouse over', value);
  }

  constructor() { }
  ngOnInit() { }
}
