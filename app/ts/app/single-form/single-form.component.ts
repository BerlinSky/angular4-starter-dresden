import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.pug',
  styleUrls: ['./single-form.component.scss']
})
export class SingleFormComponent {
  constructor() { }
  ngOnInit() { }

  onClick(value: string) {
    console.log('clicked', value);
  }

  onMouseOver(value: string) {
    console.log('mouse over', value);
  }
}
