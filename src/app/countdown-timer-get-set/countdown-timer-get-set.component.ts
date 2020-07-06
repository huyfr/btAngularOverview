import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.scss']
})
export class CountdownTimerGetSetComponent implements OnInit {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  private _seconds = 11;

  @Input()
  get seconds(): number {
    return this._seconds;
  }

  set seconds(value) {
    value = typeof value === 'undefined' ? 11 : value;
    const valueFixed = Number(value);
    this._seconds = Number.isNaN(valueFixed) ? 11 : valueFixed;
  }

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
