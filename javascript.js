console.log("code works");

let a = 0;
let b = 0;
let operation = "";

// main logic

function operate(a, b, operation) {
    switch(operation) {
        case "add": 
            return (a + b);
        case "multiply":
            return (a * b);
        case "minus":
            return (a - b);
        case "divide":
            return (a / b);
    }
}

