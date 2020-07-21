// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed


const calculateBtn = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringFieldElem = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

var currentTotal =  totalPhoneBill(billStringFieldElem.value)


function calculateBtnClicked() {

var billString = billStringFieldElem.value;

var list = billString.split(',')

const roundedBillTotal = totalPhoneBill(list);

billTotalElement.classList.remove("critical");
billTotalElement.classList.remove("warning");

if ( roundedBillTotal >= 30) {
    billTotalElement.classList.add("critical");
}
else if (roundedBillTotal >= 20 &&  roundedBillTotal< 30) {
    billTotalElement.classList.add("warning");
}

billTotalElement.innerHTML = roundedBillTotal.toFixed(2);

}


calculateBtn.addEventListener("click", calculateBtnClicked);