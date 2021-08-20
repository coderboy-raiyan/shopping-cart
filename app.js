const phonePlusBtn = document.querySelector(".phone-plus-btn");
const phoneMinusBtn = document.querySelector(".phone-minus-btn");
const phoneInput = document.querySelector(".phone-input");
const caseInput = document.querySelector(".case-input");
const casePlusBtn = document.querySelector(".case-plus-btn");
const caseMinusBtn = document.querySelector(".case-minus-btn");
let phoneTotal = document.querySelector(".phone-total");
let caseTotal = document.querySelector(".case-total");
let subTotal = document.querySelector(".sub-total");
let totalTax = document.querySelector(".tax");
let total = document.querySelector(".total");

function getNumber(myInput, isAdd) {
  let myValue = Number(myInput.value);
  if (isAdd == true) {
    myValue++;
    myInput.value = myValue;
  } else if (myValue <= 0) {
    return;
  } else {
    myValue--;
    myInput.value = myValue;
  }
  getMoney(myInput, myValue);
}
let phonePrice = 0;
let casePrice = 0;

function getMoney(myInput, myCurrValue) {
  if (myInput === phoneInput) {
    phonePrice = myCurrValue * 1219;
    phoneTotal.innerHTML = phonePrice;
  } else {
    casePrice = myCurrValue * 59;
    caseTotal.innerHTML = casePrice;
  }
  let subtotal = phonePrice + casePrice;
  subTotal.innerHTML = subtotal;

  let tax = subtotal / 10;
  totalTax.innerHTML = tax;

  let mainAmount = subtotal + tax;
  total.innerHTML = mainAmount;
}

phonePlusBtn.addEventListener("click", function () {
  getNumber(phoneInput, true);
});
phoneMinusBtn.addEventListener("click", function () {
  getNumber(phoneInput, false);
});

casePlusBtn.addEventListener("click", function () {
  getNumber(caseInput, true);
});
caseMinusBtn.addEventListener("click", function () {
  getNumber(caseInput, false);
});
