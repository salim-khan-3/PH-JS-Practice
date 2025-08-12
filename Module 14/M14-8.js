/**
 * ternary operator
 * 
 * condition ? do something 
 */

const age = 120;

/**
 * simple TERNARY OPERATOR
 */
age >= 18? console.log("you can vote ") : console.log("you can not vote ");

/**
 * COMPLEX TERNARY OPERATOR
 */

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price+100;
}
console.log(price);


price = isLeader === true? 0: price + 100;
console.log(price);


if(isLeader === true){
    if(price>1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}
console.log(price);



let x = 10;
if (x > 5) {
  if (x < 15) {
    console.log("x is between 5 and 15");
  } else {
    console.log("x is greater than or equal to 15");
  }
} else {
  console.log("x is 5 or less");
}