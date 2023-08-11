import { Component } from '@angular/core';

@Component({
  selector: 'app-min-clock',
  templateUrl: './min-clock.component.html',
  styleUrls: ['./min-clock.component.css']
})
export class MinClockComponent {

  mins: any = []

  constructor(){
    for (let i = 0; i < 60; i++) {
      this.mins.push(i);
  }
  }
}
