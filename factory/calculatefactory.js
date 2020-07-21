function totalPhoneBill(billString) {

    var billTotal = 0;

    for (var i = 0; i < billString.length; i++) {
        var billItem = billString[i].trim();

        if (billItem === "call") {
            billTotal += 2.75;
        }

        else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }
    return billTotal
}