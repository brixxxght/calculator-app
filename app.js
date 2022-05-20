let prevDisplayNumber = document.querySelector(".prev-number");
let currDisplayNumber = document.querySelector(".current-number");
const numberBtns = document.querySelectorAll(".num");
const operatorsBtn = document.querySelectorAll(".operator");




const equalbtn = document.querySelector(".equal");
equalbtn.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
        previousNum = ""
    }
})



const delbtn = document.querySelector(".del");
delbtn.addEventListener("click", handleDelete)


function handleDelete(){
    if (currentNum) {
        let res = currentNum.slice(0, currentNum.length - 1);
        currentNum = res;
        currDisplayNumber.textContent = "";
        currDisplayNumber.textContent = currentNum;
        // console.log(res);
    }
}


const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    currentNum = ""
    previousNum = ""
    currDisplayNumber.textContent = ""
    prevDisplayNumber.textContent = ""
})



const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    addDecimal()
})


let currentNum = "";
let previousNum = "";
let operator = "";


window.addEventListener("keydown", handlePressedKey)


numberBtns.forEach(number => {
    number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
})

function handleNumber(number) {
    currentNum += number
    currDisplayNumber.textContent = currentNum;
}

operatorsBtn.forEach(operator => {
    operator.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    });
});

function handleOperator (op) {
    operator = op;
    previousNum = currentNum;
    prevDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currDisplayNumber.textContent = "";
}

function calculate() {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)

    if (operator === "+") {
        previousNum = previousNum + currentNum;
    }else if (operator === "x") {
        previousNum = previousNum * currentNum;
    }else if (operator === "-") {
        previousNum = previousNum - currentNum;
    }else if (operator === "%") {
        previousNum = previousNum / currentNum;
    }

    // previousNum = previousNum.toString();
    prevDisplayNumber.textContent = "";
    currentNum = previousNum;
    currDisplayNumber.textContent = previousNum;

}

function addDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currDisplayNumber.textContent = currentNum;
    }
}

function handlePressedKey(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key)
    }
    if (e.key === "Enter" || e.key === "=" && currentNum != "" && previousNum != "") {
        calculate()
        // previousNum = "";
        previousNum = ""
        // currDisplayNumber = currentNum;
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key)
    }
    if (e.key === "*") {
        handleOperator("x")
    }
    if (e.key === ".") {
        addDecimal();
    }
    if (e.key === "Backspace") {
        handleDelete()
    }
}


//