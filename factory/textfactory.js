function TextInputBill() {


    var callsTotal = 0;
    var smsTotal = 0;


    function billTotal(billStringEntered) {

            if (billStringEntered === "call") {
                callsTotal += 2.75;
            }
            else if (billStringEntered === "sms") {
                smsTotal += 0.75;
            }
        }
    
    function getCallTotal() {
        return callsTotal;
    }

    function getSmsTotal() {
        return smsTotal;
    }

    function getTotal() {
        return smsTotal + callsTotal;
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

        billTotal,
        getCallTotal,
        getSmsTotal,
        getTotal,
        styleTotalColor,
    }
}