console.log("code works");

let a = 0;
let b = 0;
let operation = "";

// main logic
function operate(a, b, operation) {
    switch(operation) {
        case "+": 
            return (a + b);
        case "x":
            return (a * b);
        case "-":
            return (a - b);
        case "/":
            return (a / b);
    }
}

// screens
function changeTop(cont) {
    topScreen.textContent = cont;
}
function changeBot(cont) {
    botScreen.textContent = cont;
}


// event listeners
function press(element) {
    console.log(element.id);
    changeTop(element.id);
    changeBot(element.id);
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => press(button));
});

let topScreen = document.querySelector(".screenTop");
let botScreen = document.querySelector(".screenBot");