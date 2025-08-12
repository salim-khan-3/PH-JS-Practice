// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

const studentInfo = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

const firstName = `${studentInfo[0].name} scored ${studentInfo[0].marks}`;
const secondName = `${studentInfo[1].name} scored ${studentInfo[1].marks}`;
console.log(firstName);
console.log(secondName);