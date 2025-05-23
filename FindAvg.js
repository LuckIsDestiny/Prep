// Define two arrays: one for names and another for marks
const names: string[] = ["A", "B"];
const marks: number[] = [10, 20];

// Display names and marks using a for loop
console.log("Student Names and Marks");
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}: ${marks[i]}`);
}

// Function to calculate average
export function findAvg(marks: number[]): number {
  let tot = 0;
  for (let i = 0; i < marks.length; i++) {
    tot += marks[i];
  }
  const averageMarks = tot / marks.length;
  return averageMarks;
}

// Display the average
console.log(`\nAverage Marks: ${findAvg(marks)}`);
