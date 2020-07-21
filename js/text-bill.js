
const type = document.querySelector(".billTypeText");
const button = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");

const textBillInstance = TextInputBill()


function addBtnClicked() {

    var billStringEntered = type.value;

    textBillInstance.billTotal(billStringEntered);





    callTotalOne.innerHTML = textBillInstance.getCallTotal();
    smsTotalOne.innerHTML = textBillInstance.getSmsTotal();
    totalOne.innerHTML = textBillInstance.getTotal();
    totalOne.classList.add(textBillInstance.styleTotalColor());



}

function styleTotalColor() {

    totalOneclassList.remove("critical");
    totalOne.classList.remove("warning");
    totalOne.classList.add(textBillInstance.totalClassName());
  
  
  }



button.addEventListener("click", addBtnClicked);