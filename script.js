let currentInput = "";
let currentOperation = "";
let previousInput = "";

function addNumber(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function addOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation}`;
}

function reikna() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "/":
      if (current === 0) {
        alert("Get ekki deilt með 0");
        return;
      }
      result = prev / current;
      break;
    case "*":
      result = prev * current;
      break;
  }
  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

function resetDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  document.getElementById("display").value = "";
}

function makeNoise() {
  var sound = document.getElementById("audio");
  sound.play();
}

function makeTap() {
  var sound = document.getElementById("tap");
  sound.play();
}

function eraseSound() {
  var sound = document.getElementById("erase");
  sound.play();
}
