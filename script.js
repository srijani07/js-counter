const btnIncrement = document.querySelector("#btn-increment");
const btnReset = document.querySelector("#btn-reset");
const btnDecrement = document.querySelector("#btn-decrement");
const divNumber = document.querySelector("#div-number");


function validateNumber() {
    if(Number(divNumber.innerText) < 0)
        divNumber.style.color = "red";
    else if(Number(divNumber.innerText) > 0)
        divNumber.style.color = "green";
    else
        divNumber.style.color = "black";
}

btnIncrement.addEventListener("click", () => {
    let currentValue = divNumber.innerText;
    currentValue++;
    divNumber.innerText = currentValue;
    validateNumber();

})

btnReset.addEventListener("click", () => {
    divNumber.innerText = 0;
    validateNumber();
})

btnDecrement.addEventListener("click", () => {
    let currentValue = divNumber.innerText;
    currentValue--;
    divNumber.innerText = currentValue;
    validateNumber();
})

