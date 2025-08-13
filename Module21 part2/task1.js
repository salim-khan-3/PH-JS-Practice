// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers){
    let minValue = numbers[0];
    for(const num of numbers){
        if(num < minValue){
            minValue = num;
        }
    }
    return minValue;
}

const min = getMin(heights2);
console.log("min value is", min);