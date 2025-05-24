export class Employee {
  empId: number = 0;
  empName: string = "";
  empSalary: number = 0;

  constructor(empId: number, empName: string, empSalary: number) {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
  }

  displayDetails(): boolean {
    console.log(`Employee Details:
Employee ID: ${this.empId}
Employee Name: ${this.empName}
Employee Salary: ${this.empSalary}`);
    return true;
  }
}

// Example usage:
let emp: Employee = new Employee(1, 'John Doe', 50000);
emp.displayDetails();
