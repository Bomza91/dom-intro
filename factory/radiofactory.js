
function RadioBill() {

    var theCallCost = 0;
    var theSmsCost = 0;
   

   function radioButtons(billItemType){
       if(billItemType === "call"){
           theCallCost += 2.75
       } else if(billItemType === "sms"){
           theSmsCost += 0.75
       }
   }

   function getCallTotal() {
    return theCallCost;
}

function getSmsTotal() {
    return theSmsCost;
}

function getTotal() {
    return theCallCost + theSmsCost;
}

function styleTotalColor() {

    if (getTotal() >= 50) {
        return "critical"
    }
    else if (getTotal() >= 30) {
        return "warning"
    }
    // return "";
}

    
    return {
        getCallTotal,
        radioButtons,
        getSmsTotal,
        getTotal,
        styleTotalColor
    }
}