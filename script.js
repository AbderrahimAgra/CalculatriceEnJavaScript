// declaration des Variables
const current_operand = document.querySelector('.current_operand');
const result_operand = document.querySelector('.result_operand');
const screenTempResult = document.querySelector('.temp_operand');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('#equal');
const clearLast = document.querySelector('.AC');
const clearAll = document.querySelector('#del');
let storingString = '';
let finallyNumber = '';
let operator = '';
let result = null;

//  Functions 
const additionner = (number1, num2) => number1 + num2;
const soustraire = (number1, num2) => number1 - num2;
const multiplier = (number1, num2) => number1 * num2;
const diviser = (number1, num2) => number1 / num2;



function operate(number1, num2, operator) { //fonction declaration
  switch (operator) {
    case '+':
      result = additionner(number1, num2);
      break;
    case '-':
      result = soustraire(number1, num2);
      break;
    case '*':
      result = multiplier(number1, num2);
      break;
    case '/':
      result = diviser(number1, num2);
      break;
  }
}

function display(newOperator) {
  current_operand.innerText += ' ' + finallyNumber + ' ' + newOperator + ' ';
  storingString = '';
  finallyNumber = '';
  result_operand.innerText = '';
}

// Event Listeners
numbers.forEach(function (number) {
  number.addEventListener('click', function (event) {
    storingString += event.target.innerText;
    result_operand.innerText = storingString;
  });
});

operations.forEach(function (operation) {
  operation.addEventListener('click', function (event) {
    if (!storingString) return;
    let newOperator = event.target.innerText;
    finallyNumber = Number(storingString);
    if (current_operand.innerText.includes('=')) {
      current_operand.innerText = '';
    } else {


      if (result === null) {
        result = finallyNumber;
      } else {
        operate(result, finallyNumber, operator);
      }
    }
    display(newOperator);
    screenTempResult.innerText = result;
    operator = newOperator;
  });
});

equal.addEventListener('click', function (event) {
  if (!currentString) return;
  finallyNumber = parseFloat(currentString);
  operate(result, finallyNumber, operator);
  let newOperator = event.target.innerText;
  display(newOperator);
  screenTempResult.innerText = '';
  result_operand.innerText = result;
  currentString = result;
});

clearLast.addEventListener('click', function () {
  currentString = '';
  result_operand.innerText = '';
});

clearAll.addEventListener('click', function () {
  currentString = '';
  finallyNumber = '';
  operator = '';
  result = null;
  current_operand.innerText = '';
  result_operand.innerText = '';
  screenTempResult.innerText = '';
});
