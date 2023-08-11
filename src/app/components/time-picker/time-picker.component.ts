import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {
  showPicker: boolean = false;

  insideWheel: boolean = false;
  wheelClicked: boolean = false;

  hoursWheel: any = [];
  selectedHour: number = 0;

  minutesWheel: any = [];
  selectedMinute: number = 0;

  isAM: boolean = true;
  selectingHours: boolean = true;

  finalTime?: string;

  @Output() cos_onChange = new EventEmitter<any>();
  @Output() cos_apply = new EventEmitter<any>();
  @Output() cos_close = new EventEmitter<any>();

  constructor() {
    this.hoursWheel = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    // for (let i = 0; i < 60; i++) this.minutesWheel.push(i);
    for (let i = 0; i < 60; i++) {
      this.minutesWheel.push(i);
    }

    console.log(this.minutesWheel)
  }

  ngOnInit(): void {
    this.showPicker = true;
    this.handleOnTimeChange();
    this.wheelClicked = false;
  }

  mouseEnter() {
    this.insideWheel = true;
  }
  mouseExit() {
    if (this.wheelClicked) return;
    this.insideWheel = false;
  }
  mouseDown() {
    this.wheelClicked = true;
  }
  mouseUp() {
    // this.wheelClicked = false;
    this.insideWheel = false;
    if (this.selectingHours) this.selectingHours = !this.selectingHours;
  }
  mouseOver(varName: string, idx: number) {
    if (!this.insideWheel || !this.wheelClicked) return;
    if (varName == "selectedHour") {
      this[varName] = idx;
    }
    if (varName == "selectedMinute") {
      this[varName] = idx;
    }

  }

  selectByClick(varName: string, data: any) {
    if (varName == "selectedHour") {
      this[varName] = data;
    }
    if (varName == "selectedMinute") {
      this[varName] = data;
    }
    if (varName === 'selectedHour') this.selectingHours = false;
    this.handleOnTimeChange();
  }


  handleOnTimeChange() {
    const hour = this.hoursWheel[this.selectedHour].toString().padStart('2', 0);
    let min: any = this.selectedMinute.toString();
    min = min.padStart('2', 0)
    const meridiem = this.isAM ? 'AM' : 'PM';
    this.finalTime = `${hour}:${min} ${meridiem}`;
    this.cos_onChange.emit(this.finalTime)
    this.wheelClicked = true;
  }

  handleOnClose() {
    this.cos_close.emit(this.finalTime);
    this.showPicker = false;
  }

  handleOnApply() {
    this.cos_apply.emit(this.finalTime);
    this.showPicker = false;
  }
}
