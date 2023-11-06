
let operation = add

function doEqual() {
    //console.log("doing handle equation")
    let a = parseFloat(document.getElementById("myNumber1").value);
    let b = parseFloat(document.getElementById("myNumber2").value);
    let output = operation(a, b)
    document.getElementById("myNumber3").value = output
}


function selectOperation(operator) {
    //console.log("selecting the operator type:" + operator)
    operation = calculation(operator)
}


function add(a, b) {
    return (a + b)
}

function substract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}


function calculation(operator){
    if (operator == "+") {
        return add
    }
    if (operator == "-") {
        return substract
    }
    if (operator == "*") {
        return multiply
    }
    if (operator == "/") {
        return divide
    }
}

function resetCalculator() {
    //console.log("reset done")
    document.getElementById("myNumber1").value = 0
    document.getElementById("myNumber2").value = 0
    document.getElementById("myNumber3").value = 0
}

//resetCalculator()
