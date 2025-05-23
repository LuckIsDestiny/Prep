import { Component } from '@angular/core';

class Employee {
  constructor(
    public id: number,
    public name: string,
    public department: string
  ) {}
}

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
})
export class EligibilityComponent {
  age: number | null = null;
  message: string = '';

  employees: Employee[] = [
    new Employee(1, 'Ali Khan', 'HR'),
    new Employee(2, 'Fatima Noor', 'IT'),
    new Employee(3, 'Ahmed Raza', 'Finance'),
  ];

  checkEligibility() {
    if (this.age !== null) {
      this.message = this.age >= 18 ? 'eligible to vote' : 'not eligible to vote';
    } else {
      this.message = '';
    }
  }
}
