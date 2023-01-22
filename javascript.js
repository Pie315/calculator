console.log("code works");

let a = 0;
let b = 0;
let operation = "";
let memory = "";

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
function pressOperation(element) { // elements
    if (memory == "") {
        return;
    } 
    
    

}

function pressNumber(number) { // numbers

    let length = memory.length;
    memory += number.id;

    changeBot(memory);
    console.log(memory);
}












let operations = document.querySelectorAll(".element");
let numbers = document.querySelectorAll(".num");

operations.forEach((operation) => {
    operation.addEventListener("click", () => pressOperation(operation));
});

numbers.forEach((number) => {
    number.addEventListener("click", () => pressNumber(number));
});

let topScreen = document.querySelector(".screenTop");
let botScreen = document.querySelector(".screenBot");