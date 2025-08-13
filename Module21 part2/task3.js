// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

  
function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty){
    const laptop = 35000;
    const tablet =15000;
    const mobile = 20000;
     

    const total = laptopQty* laptop+ tabletQty* tablet + mobileQty* mobile;
    return total;
}
const totalBudget = calculateElectronicsBudget(1,1,1);
console.log(totalBudget);