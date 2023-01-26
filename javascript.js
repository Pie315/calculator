console.log("code works");

let a = 0;
let b = 0;
let operator = undefined;
let memoryBot = "";
let last = "";
let decimal = false;
let topScreenContent = "";
let botScreenContent = "";
let test = ['5', '9', '2', '.', '3', "."];


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
            if (b == 0) {
                clearMem();
                changeBot("Are you serious? Really?");
                return;
            }
            out = (a / b);
            break;
    }
    out = (Math.round(out * 1000))/1000; // rounds to the thousands place
    return out;
}

function calculate() {

    if (operator == undefined) { // only runs when there is an operator selected
        return;
    }

    const length = memoryBot.length;
    const arrayFrom = Array.from(memoryBot);

    const isOperator = (element) => element == operator;
    const location = arrayFrom.findIndex(isOperator);

    let a = Number(memoryBot.slice(0, location));
    let b = Number(memoryBot.slice(location + 1, length));

    const result = String(operate(a, b, operator));

    memoryBot = result;
    operator = undefined;

    changeTop(botScreenContent);
    changeBot(result); 
}

function checkFor(list, target) {
    let number = 0;
    list.forEach((index) => {
        if (index == target) {
            number++;
        }
    });
    if (number > 1) {
        return false;
    } else {
        return true;
    }
}

function decimalAllowed(check, target) { // returns true if a decimal is allowed
    
    const length = check.length;

    const arrayFrom = Array.from(check);

    if (operator == undefined) {
        console.log(checkFor(arrayFrom, target));
        return checkFor(arrayFrom, target);
    } else {
        const isOperator = (element) => element == operator;
        const location = arrayFrom.findIndex(isOperator);
        
        const b = (check.slice(location + 1, length));
        const a = Array.from(b);
        let outCome = checkFor(a, target);

        if (outCome == true) {
            changeBot(memoryBot+target);
            botScreenContent+=target;
            memoryBot+=target;
        }

        return outCome;
    }
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

    if ((element.id == ".")&&(decimalAllowed(memoryBot+".", ".") == false)) {
        return; // id == . and not allowed 
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