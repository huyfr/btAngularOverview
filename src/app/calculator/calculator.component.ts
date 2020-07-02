import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  output: number;
  first: number;
  second: number;
  operator = '+';

  setFirst(value) {
    this.first = value;
  }

  setSecond(value) {
    this.second = value;
  }

  setOperator(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+' :
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
