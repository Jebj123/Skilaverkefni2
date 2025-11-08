const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const addOn = ["*", "/", "-", "+", "="];
let result = "";

const reikna = (btnValue) => {
  display.focus();
  if (btnValue === "=" && result !== "") {
    result = eval(result);
  } else if (btnValue === "AC") {
    result = "";
  } else if (btnValue === "DEL") {
    result = result.toString().slice(0, -1);
  } else {
    if (result === "" && addOn.includes(btnValue)) return;
    result += btnValue;
  }
  display.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => reikna(e.target.dataset.value));
});

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
