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

// Function to add, subtract, multiply, divide and find modulus
function add(a,b){
    let sum = a+b;
    sum = roundUp(sum);
    return sum;
}

function subtract(a,b){
    let difference = a-b; 
    difference = roundUp(difference);
    return difference;
}

function multiply(a,b){
    let product = a-b;
    product = roundUp(product);
    return product;
}

function divide(a,b){
    let quotient = a/b;
    quotient = roundUp(quotient);
    return quotient;
}

function modulus(a,b){
    return a%b;
}
