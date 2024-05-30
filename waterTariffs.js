function calculateBill (){}

//Rates 
let step1 = 15.73;
let step2 = 22.38;
let step3 = 31.77;
let step4 = 65.76;

//Calculate the bill based on usage
let totalBill;
//for step1
if (litresUsed <= 6000){
    totalBill = litresUsed * (step1 / 1000);
}
//for step2
else if (litresUsed <= 10500){
    totalBill = 6000 * (step1 / 1000) + (litresUsed - 6000) * (step2 / 1000);
}
//for step3
else if (litresUsed <= 35000){
    totalBill = 6000 * (step1 / 1000) + 4500 * (step2 / 1000) +
    (litresUsed - 10500) * (step3 / 1000);
} // for step4
else {
    totalBill = 6000 * (step1 / 1000) + 4500 * (step2 / 1000) +
    24500 * (step3 / 1000) + (litresUsed - 35000) * (step4 / 1000);
}


//Result
console.log("The water bill is R" + totalBill.toFixed(2));


