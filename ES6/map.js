const numbers = [4,5,6,8,5,9,58,5];
const doubled = [];

for(const num of numbers){
    const results = num * 2;
    doubled.push(results);
   
}
//  console.log(doubled);

//  const doubleIt = x => x * 2;
//  const douledResult = numbers.map(doubleIt)
//  console.log(douledResult);

// const doubled1 = numbers.map(x => x * 2);

// console.log(doubled1);

const fiveTimes = numbers.map(num => num * 5);
console.log(fiveTimes);
const squared = numbers.map(num => num * num);
console.log(squared);


const friends = ['salim', 'sodfdni', 'skjfkdj'];
const numberLength = friends.map(num => num.length)
console.log(numberLength);
const getFirstLatter = friends.map(firstlatter => firstlatter[0]);
console.log(getFirstLatter);


const result = numbers.map((num,index) =>{
    console.log(num * index);
    return index;
})

console.log(result);