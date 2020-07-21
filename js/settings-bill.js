
const btnAdd = document.querySelector(".add");
const btnUpd = document.querySelector(".updateSettings")
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const totalSettingsElem = document.querySelector(".totalSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");

var settingsBillInstance = BillWithSettings();


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

  if (item === "call") {
    settingsBillInstance.makeCall()
  }
  if (item === "sms") {
    settingsBillInstance.sendSms()

  }


  callTotalSettings.innerHTML = settingsBillInstance.getTotalCallCost().toFixed(2);
  smsTotalSettings.innerHTML = settingsBillInstance.getTotalSmsCost().toFixed(2);
  totalSettingsElem.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);
  styleTotalColor();

}

function styleTotalColor() {

  totalSettingsElem.classList.remove("critical");
  totalSettingsElem.classList.remove("warning");
  totalSettingsElem.classList.add(settingsBillInstance.totalClassName());


}

btnAdd.addEventListener("click", clicked);
btnUpd.addEventListener("click", updated);