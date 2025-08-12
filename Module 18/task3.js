// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var concatNumber = "";
for(const number of numbers){
    concatNumber = concatNumber.concat(number);
}
console.log(concatNumber);