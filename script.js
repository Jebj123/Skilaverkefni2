let currentInput = "";
let currentOp = "";
let previousInput = "";

function addNumb(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOp} ${currentInput}`;
}

function symbolAdd(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    reikna();
  }
  currentOp = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById("display").value = `${previousInput} ${currentOp}`;
}

function reikna() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  if (currentOp == "+") {
    result = prev + current;
  } else if (currentOp == "/") {
    result = prev / current;
  } else if (currentOp == "*") {
    result = prev * current;
  } else if (currentOp == "-") {
    result = prev - current;
  }
  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

function erase() {
  currentInput = "";
  previousInput = "";
  currentOp = "";
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
