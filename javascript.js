console.log("code works");

let a = 0;
let b = 0;
let operation = "";
let memoryBot = "";
let last = "";
let decimal = false;
let topScreenContent = "";
let botScreenContent = "";


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

function calculate() {
    changeTop(memoryBot);





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

    console.log(memoryBot[length]);
    switch (memoryBot[length]) {
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
            decimal=false;
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
    } else if ( element.id == ".") {
        if (decimal == true) {
            return;
        }
        decimal = true;
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