const body = document.body;
body.height = "100vh";
body.style.position = "absolute";
body.style.top = "50%";
body.style.left = "50%";
body.style.transform = "translate(-50%, -50%)";
const calculator = document.createElement("div");
calculator.style.border = "1px solid black";
calculator.style.width = "300px";
calculator.style.height = "500px";
body.appendChild(calculator);

const display = document.createElement("div");
display.style.border = "1px solid black";
display.style.width = "250px";
display.style.height = "50px";
display.style.margin = "30px 20px auto";
display.textContent = "";
display.style.display = "flex";
display.style.alignItems = "center";
display.style.justifyContent = "center";
calculator.appendChild(display);

const buttons = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["0", "/", "=", "X"],
];

let n1 = 0;
let n2 = 0;
let n2text = "";
let op = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const button = document.createElement("div");
    button.style.border = "1px solid black";
    button.style.width = "30px";
    button.style.height = "25px";
    button.style.margin = "30px 20px auto";
    button.style.display = "inline-block";
    const buttonName = document.createElement("div");
    buttonName.style.height = button.style.height;
    buttonName.style.display = "flex";
    buttonName.style.alignItems = "center";
    buttonName.style.justifyContent = "center";
    buttonName.textContent = buttons[i][j];
    button.appendChild(buttonName);
    button.addEventListener("click", function () {
      switch (buttonName.textContent) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          if (op === "") {
            display.textContent += buttonName.textContent;
            n1 = parseInt(display.textContent);
          } else {
            n2text += buttonName.textContent;
            display.textContent += buttonName.textContent;
            n2 = parseInt(n2text);
            console.log(n1 + " " + op + " " + n2);
          }
      }
      switch (buttonName.textContent) {
        case "+":
        case "-":
        case "*":
        case "/":
          if (op != "") {
            console.log("Finding " + n1 + " " + op + " " + n2);
            n1 = operate(n1, op, n2);
            n2 = 0;
            n2text = "";
          }
          op = buttonName.textContent;
          console.log(n1 + " " + op);
          display.textContent += buttonName.textContent;
      }
      if (buttonName.textContent === "=") {
        console.log(n1 + " " + op + " " + n2);
        console.log(operate(n1, op, n2));
        n1 = operate(n1, op, n2);
        display.textContent = n1;
        n2 = 0;
        n2text = "";
        op = "";
      } else if (buttonName.textContent === "X") {
        n1 = 0;
        n2 = 0;
        n2text = "";
        op = "";
        display.textContent = "";
      }
    });
    calculator.appendChild(button);
  }
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(n1, op, n2) {
  if (op === "+") {
    return add(n1, n2);
  } else if (op === "-") {
    return subtract(n1, n2);
  } else if (op === "*") {
    return multiply(n1, n2);
  } else if (op === "/") {
    return divide(n1, n2);
  }
}
