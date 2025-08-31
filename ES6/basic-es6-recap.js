const add2 = (num1,num2 = 0) => num1 + num2;

const friends = ['salim','islam','from','thakurgaon'];

//spread operator
const newFriends = [...friends, 'sonia','sonia'];
console.log(newFriends);

//destructring to object 
const student = {
    name:'salim islam',
    marks:50
}

const {marks:totalmarks, age = 0 } =student;
console.log(totalmarks,age);

// destructring to array 
const studentInfo = ['rahat','rafi']
const [firstFriend,secondFriends] = studentInfo;

console.log(secondFriends);