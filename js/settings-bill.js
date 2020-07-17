// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
const btnAdd = document.querySelector(".add");
const btnUpd = document.querySelector(".updateSettings")
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const totalSettings = document.querySelector(".totalSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");

var settingsBillInstance = BillWithSettings();

// var smsCostVal=0;
// var callCostVal=0;
// var warnLevel=0;
// var critLevel=0;

// var smsCostTotal=0;
// var callCostTotal=0;
// var allCostTotal=0;

function updated() {
  settingsBillInstance.setCallCost(Number(callCost.value));
  settingsBillInstance.setSmsCost(Number(smsCost.value));
  settingsBillInstance.setWarningLevel(Number(warningLevel.value));
  settingsBillInstance.setCriticalLevel(Number(criticalLevel.value));

  styleTotalColor()
}


function clicked() {

  var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  var item = radioSmsCall.value;

  settingsBillInstance.radioButtons(item);


  // tCostOfBill(item);    
  callTotalSettings.innerHTML = settingsBillInstance.getCallCost().toFixed(2);
  smsTotalSettings.innerHTML = settingsBillInstance.getSmsCost().toFixed(2);
  totalSettings.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);
  styleTotalColor();

}

// function styleTotalColor() {

//   totalSettings.classList.remove("critical");
//   totalSettings.classList.remove("warning");

//   var styleTotalColor = settingsBillInstance.styleTotalColor();
//   totalSettings.classList.add(styleTotalColor);


// }


// if(currTotal>=warnLevel && currTotal<critLevel){
// totalCostElem.classList.add("warning");
// }

// else if(currTotal>=critLevel){

//     totalCostElem.classList.add("critical")
// } 



// function tCostOfBill(billItemType) {
//   if(allCostTotal < critLevel){
//             if (billItemType === "call") {
//         callCostTotal += callCostVal;
//               allCostTotal += callCostVal;
//             }
//             else if (billItemType === "sms") {
//         smsCostTotal += smsCostVal;

//               allCostTotal += smsCostVal;
//             }
//         }
// }


btnAdd.addEventListener("click", clicked);
btnUpd.addEventListener("click",updated);


