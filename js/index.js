document.addEventListener("DOMContentLoaded", function(event) {
  // the content is loaded
  display = document.getElementById('display');

  document.querySelectorAll('.operator').forEach(el => {
    el.addEventListener('click', opClicked)
  });

  document.querySelectorAll('.digit').forEach(el => {
    // add event listner to el
    el.addEventListener('click', numClicked);
  });
});

let display;
let leftOperand = "";
let rightOperand = "";
let operator;

function numClicked(event) {
  const digit = event.target.innerHTML;

  // handle new input
  if (operator) {
    // set right operand
    rightOperand += digit;
    display.value = leftOperand + operator + rightOperand;
  }
  else {
    // set right operand
    leftOperand += digit;
    display.value = leftOperand;
  }
}

function opClicked(event) {
  const newOperator = event.target.innerHTML;
  if (leftOperand && rightOperand) {

    if (operator == "+") {
      leftOperand = "" + (leftOperand * 1 + rightOperand * 1);
    }
    else if (operator == "-") {
      leftOperand = "" + (leftOperand * 1 - rightOperand * 1);
    }
    else if (operator == "*") {
      leftOperand = "" + (leftOperand * 1 * rightOperand * 1);
    }
    else if (operator == "/") {
      leftOperand = "" + (leftOperand * 1 / rightOperand * 1);
    }

    rightOperand = "";
  }
  else if (leftOperand) {

  }

  if (newOperator != "=") {
    operator = newOperator;
  }
  else {
    operator = "";
  }

  display.value = leftOperand + operator;


}
