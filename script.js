const output = document.getElementsByClassName("current_operand")[0];
const btns = document.getElementsByTagName("button");
let number1;
let number2;
let operation;
for (let i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    
    switch (btnText) {

      case "/":
        number1 / number2
        break;
      case "*":
        number1 * number2
        break;
      case "+":
        number1 + number2
        break;
      case "-": 
        number1 - number2
        break;
      case "=":
        break;
      case ".":
        break;
        
      case "AC":
        break;
      case "DEL":
        break;
      default:
        output.innerText += btnText;
    };
  });
}
