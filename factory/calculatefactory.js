
function totalPhoneBill(billString) {

    var billTotal = 0;

var newList = billString.split(",")

    for (var i = 0; i < newList.length; i++) {
        var billItem = newList[i].trim();

        if (billItem === "call") {
            billTotal += 2.75;
        }

        else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }
    return billTotal
}