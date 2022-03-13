/*const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const deletAllButtons = document.querySelector('[data-deletAll]')
const deletButtons = document.querySelector('[data-delet]')
const opatorButtonsOutput = document.querySelectorAll('[data-previousOperand]')
const currentOperandOutput = document.querySelectorAll('[current_operand]')*/
const output = document.getElementsByClassName("current_operand")[0];

const btns = document.getElementsByTagName("button");

for(let i=0 ; i<btns.length ; i++){
 btns[i].addEventListener("click",function(e){
   let btnText=e.target.innerText;
   switch(btnText){
     case "/" : number1 / number2  
     break;
     case "*" :  number1 * number2
     break;
     case "+" : number1 + number2  
     break;
     case "-" :  number1 - number2
     break;
     case "=" :  
     break;
     case "." : 
     break;
     case "AC" :  
     break;
     case "DEL" : 
     break;

     default: 
     output.innerText+=btnText;
   };
 });

}

// number1.addEventListener("click",function(e){
//   output.innerText += e.target.innerText ;
// })
