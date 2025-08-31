const students = [
  {
    id: 1,
    name: "aboul",
    marks: 50,
  },
  {
    id: 2,
    name: "kabul",
    marks: 55,
  },
  {
    id: 3,
    name: "habul",
    marks: 95,
  },
  {
    id: 4,
    name: "sabul",
    marks: 85,
  },
];


const getInfo = students.map(info => info.name)
const getInfo1 = students.map(info => info.marks)
console.log(getInfo);
console.log(getInfo1);

const goodStudents = students.filter(student => student.marks > 80)
console.log(goodStudents);