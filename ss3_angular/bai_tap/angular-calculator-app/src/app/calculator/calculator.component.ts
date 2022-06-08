import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result:any = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(firstOperand, operator, secondOperand, result) {
    if (secondOperand == 0 && operator == "/") {
      this.result = "Invalid operation"
    } else {
      switch (operator) {
        case "+":
          this.result = parseInt(firstOperand,2) + parseInt(secondOperand,2);
          break;
        case "-":
          this.result = firstOperand - secondOperand;
          break;
        case "*":
          this.result = firstOperand * secondOperand;
          break;
        case "/":
          this.result = firstOperand / secondOperand
          break;
      }
    }
  }
}
