// Global variables for what will be displayed on calculator display
let num1; 
let num2; 
let operator;
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
// Making variables to refer to the individual buttons
const ONE = numButtonArray[0];
const TWO = numButtonArray[1];
const THREE = numButtonArray[2];
const FOUR = numButtonArray[3];
const FIVE = numButtonArray[4];
const SIX = numButtonArray[5];
const SEVEN = numButtonArray[6];
const EIGHT = numButtonArray[7];
const NINE = numButtonArray[8];
const DECIMAL = numButtonArray[9];
const ZERO  = numButtonArray[10];

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
});
