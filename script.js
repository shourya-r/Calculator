// Global variables for what will be displayed on calculator display
let previousOperator;
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
    let product = a*b;
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

// Operate function which takes in operator and two numbers and calls the 
// appropriate function
function operate(operator, num1, num2){
    switch(operator){
        case "+" : 
            return add(num1,num2);
        case "-" :
            return subtract(num1,num2);
        case "*" : 
            return multiply(num1,num2);
        case "/" : 
            return divide(num1,num2);
        case "%" : 
            return modulus(num1,num2);
    }
}

function removeLastLetter(string){
    return string.slice(0,string.length-1);
}

// UI 

// Get references to the various HTML elements 
const previousTerm = document.querySelector(".previous-term");
const currentTerm = document.querySelector(".current-term");

const numButtonArray = [...document.querySelectorAll(".num-button")];
console.log(numButtonArray);

// Getting references to the operator buttons
const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");
const modulusButton = document.querySelector(".modulus-button");
const equalToButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");

// Adding event listeners to the number buttons to type out the number
numButtonArray.forEach(numButton =>{
    numButton.addEventListener('click', ()=>{
        currentTerm.textContent += numButton.textContent;
    });
});

// Add an event listener to the delete button to remove the last digit 
deleteButton.addEventListener('click', ()=>{
    currentTerm.textContent = removeLastLetter(currentTerm.textContent);
});

// Add an event listener to the clear button
clearButton.addEventListener('click', ()=>{
    currentTerm.textContent = "";
    previousTerm.textContent = "";
    previousOperator = "";
});

// Operator button event listener

// If previous term is not present then it will take the input and make it the previous term
// Otherwise it will operate with the previous operator first and make it the previous term
// Then it will update the previous operator 
// It will then clear the current term screen
addButton.addEventListener('click', ()=>{
    if(previousTerm.textContent ===""){
        previousTerm.textContent = currentTerm.textContent + " + ";
        previousOperator = "+";
    }
    else{
        let operand1 = +previousTerm.textContent.split(" ")[0];
        let operand2 = currentTerm.textContent;
        previousTerm.textContent = operate(previousOperator,operand1, operand2)+" + ";
        previousOperator = "+";
    }
    currentTerm.textContent = "";
});

subtractButton.addEventListener('click', ()=>{
    if(previousTerm.textContent ===""){
        previousTerm.textContent = currentTerm.textContent + " - ";
        previousOperator = "-";
    }
    else{
        let operand1 = +previousTerm.textContent.split(" ")[0];
        let operand2 = +currentTerm.textContent;
        previousTerm.textContent = operate(previousOperator,operand1, operand2)+" - ";
        previousOperator = "-";
    }
    currentTerm.textContent = "";
});

multiplyButton.addEventListener('click', ()=>{
    if(previousTerm.textContent ===""){
        previousTerm.textContent = currentTerm.textContent + " x ";
        previousOperator = "*";
    }
    else{
        let operand1 = +previousTerm.textContent.split(" ")[0];
        let operand2 = +currentTerm.textContent;
        previousTerm.textContent = operate(previousOperator,operand1, operand2)+" x ";
        previousOperator = "*";
    }
    currentTerm.textContent = "";
});

divideButton.addEventListener('click', ()=>{
    if(previousTerm.textContent ===""){
        previousTerm.textContent = currentTerm.textContent + " / ";
        previousOperator = "/";
    }
    else{
        let operand1 = +previousTerm.textContent.split(" ")[0];
        let operand2 = +currentTerm.textContent;
        previousTerm.textContent = operate(previousOperator,operand1, operand2)+" / ";
        previousOperator = "/";
    }
    currentTerm.textContent = "";
});

modulusButton.addEventListener('click', ()=>{
    if(previousTerm.textContent ===""){
        previousTerm.textContent = currentTerm.textContent + " % ";
        previousOperator = "%";
    }
    else{
        let operand1 = +previousTerm.textContent.split(" ")[0];
        let operand2 = +currentTerm.textContent;
        previousTerm.textContent = operate(previousOperator,operand1, operand2)+" % ";
        previousOperator = "%";
    }
    currentTerm.textContent = "";
});

// Adding event listener to the equal to button
equalToButton.addEventListener("click", ()=>{
    let operand1 = +previousTerm.textContent.split(" ")[0];
    let operand2 = +currentTerm.textContent;
    currentTerm.textContent = operate(previousOperator,operand1, operand2);
    previousTerm.textContent = "";
});

