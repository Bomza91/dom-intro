
const billItemTypeRadio = document.querySelector(".billItemTypeRaidio");

const billRadioBtn = document.querySelector(".radioBillAddBtn");

const callTotalTwo = document.querySelector(".callTotalTwo");

const smsTotalTwo = document.querySelector(".smsTotalTwo");

const totalTwo = document.querySelector(".totalTwo");

var radioBillInstance = RadioBill();




function radioBill() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    var billItemType = checkedRadioBtn.value;

    radioBillInstance.radioButtons(billItemType);

   
    callTotalTwo.innerHTML = radioBillInstance.getCallTotal();
    smsTotalTwo.innerHTML = radioBillInstance.getSmsTotal();
    totalTwo.innerHTML = radioBillInstance.getTotal();
    totalTwo.classList.add(radioBillInstance.styleTotalColor());

}

function styleTotalColor() {

    totalTwo.classList.remove("danger")
    totalTwo.classList.remove("warning")
    totalTwo.classList.add(radioBillInstance.totalClassName());

    var currentStyle = radioBillInstance.styleTotalColor();
    totalTwo.classList.add(currentStyle);


}

billRadioBtn.addEventListener('click', radioBill);

