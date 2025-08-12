/**
 * multiple level condition
 */

const price = 3200;
if(price >= 5000){
    // 10 % discount 
    const discount = price *10/100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 2500){
    // 5% discount
    const discount = price * 5/100;
    console.log(`great you have total discount ${discount}`);
    const payBill = price - discount;
    console.log(payBill);
}
else{
    console.log(`you have no discount and your product price is ${price}`);
}


/**
 * example two
 */
const age = 62;
const Price = 500;
if (age <= 12){
    console.log("you can eat for free");
}
else if(age >= 60){
    // 50% discount 
    const discount = Price * 0.5;
    const totalPayAmount = Price - discount;
    console.log(totalPayAmount);
}
else{
    console.log(Price);
}