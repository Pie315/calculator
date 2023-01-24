console.log("code works");

let a = 0;
let b = 0;
let operator = undefined;
let memoryBot = "";
let last = "";
let decimal = false;
let topScreenContent = "";
let botScreenContent = "";


// main logic
function operate(a, b, operation) {
    let out = undefined;
    switch(operation) {
        case "+": 
            out = (a + b);
            break;
        case "x":
            out = (a * b);
            break;
        case "-":
            out = (a - b);
            break;
        case "/":
            out = (a / b);
            break;
    }
    out = (Math.round(out * 1000))/1000;
    return out;
}

function calculate() {

    if (operator == undefined) {
        return;
    }

    const length = memoryBot.length;
    const arrayFrom = Array.from(memoryBot);

    const isOperator = (element) => element == operator;
    const location = arrayFrom.findIndex(isOperator);

    let a = Number(memoryBot.slice(0, location));
    let b = Number(memoryBot.slice(location + 1, length));

    changeTop(operate(a, b, operator));
}



// screens
function changeTop(cont) {
    topScreenContent = cont;
    topScreen.textContent = cont;
}
function changeBot(cont) {
    botScreenContent = cont;
    botScreen.textContent = cont;
}

function clearMem() {
    changeTop("");
    changeBot("");
    memoryBot = "";
    decimal = false;
    operator = undefined;
}

function deleteMem() {
    let length = memoryBot.length;

    switch (memoryBot[length-1]) {
        case "+":
            operator = undefined;
            break;
        case "-":
            operator = undefined;
            break;
        case "/":
            operator = undefined;
            break;
        case "x":
            operator = undefined;
            break;
        case ".":
            decimal = false;
            break;
        default:
            break;
    }


    memoryBot = memoryBot.slice(0, length - 1);
    changeBot(memoryBot);
}

// event listeners
function pressOperation(element) { // elements
    if (memoryBot == "") {
        return;
    } else if (element.id == "clear") {
        clearMem();
        return;
    } else if (element.id == "delete") {
        deleteMem();
        return;
    } else if (element.id == "=") {
        calculate();
        return;
    }
    if (element.id == ".") {
        if (decimal == true) {
            return;
        }
        decimal = true;
    }

    if (operator != undefined) {
        return;
    }

    switch(element.id) {
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "/":
            operator = "/";
            break;
        case "x":
            operator = "x";
            break;    
    }

    memoryBot += element.id;
    changeBot(memoryBot);
}

function pressNumber(number) { // numbers
    memoryBot += number.id;

    changeBot(memoryBot);
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