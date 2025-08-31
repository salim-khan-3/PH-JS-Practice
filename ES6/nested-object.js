const student = {
    name: 'rafid',
    1:50,
    'home-address': 'kochu kheat',
    marks:90
}

// dot notation 
const studentName = student.name;

// bracket notation 
const studentName2 = student['name'];

console.log(student);
console.log(student['home-address']);

for(const key in student){
    const value = student[key]
    console.log(value);
}

const propName = 'name'
console.log(student[propName]);