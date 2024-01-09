// Making a function for rounding up the answer of the calculator
// Rounding upto 6 decimal places
function roundUp(num){
    // Making check for no decimal places first
    if(Math.floor(num)===num){
        return +num;
    }
    let decimalPlaces = num.toString().split(".")[1].length;
    if(decimalPlaces>6){
        return +num.toFixed(6);
    }
    else{
        return +num;
    }
}
