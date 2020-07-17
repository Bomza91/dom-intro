describe("The text input bill factory function", function () {

    it("should be able to enter call cost", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(2.75);
        assert.equal(2.75, textBill.getCallCost());

        let textBill2 = TextInputBill();
        textBill2.setCallCost(1.85);
        assert.equal(1.85, textBill2.getCallCost());
    })

    it("should be able to enter sms cost", function () {
        let textBill = TextInputBill();

        textBill.setSmsCost(0.75);
        assert.equal(0.75, textBill.getSmsCost());

        let textBill2 = TextInputBill();
        textBill2.setSmsCost(0.65);
        assert.equal(0.65, textBill2.getSmsCost());
    })

    it("should be able to set warning level", function () {

        let textBill = TextInputBill();

        textBill.setWarningLevel(30);

        assert.equal(30, textBill.getWarningLevel());

    })

    it("should be able to set danger level", function () {

        let textBill = TextInputBill();

        textBill.setDangerLevel(50);

        assert.equal(50, textBill.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();


        assert.equal(11.00, textBill.getTotalCost());
        assert.equal(11.00, textBill.getTotalCallCost());
        assert.equal(0.00, textBill.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.sendSms();
        textBill.sendSms();

        assert.equal(1.50, textBill.getTotalCost());
        assert.equal(0.00, textBill.getTotalCallCost());
        assert.equal(1.50, textBill.getTotalSmsCost());
    })
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(5.00);
        textBill.setSmsCost(2.00);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        
        
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();

        assert.equal("warning", textBill.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(5.00);
        textBill.setSmsCost(2.00);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
       
        assert.equal("danger", textBill.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(10);
        textBill.setSmsCost(5.00);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.makeCall();
        textBill.makeCall();
        
        
        textBill.sendSms();
        textBill.sendSms();
        textBill.sendSms();
        

        assert.equal(20.00, textBill.getTotalCallCost());
        assert.equal(15.00, textBill.getTotalSmsCost());
        assert.equal("warning", textBill.totalClassName());
        
    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let textBill = TextInputBill();

        textBill.setCallCost(10.00);
        textBill.setSmsCost(5.00);
        textBill.setWarningLevel(30);
        textBill.setDangerLevel(50);

        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        
        
        textBill.sendSms();
        textBill.sendSms();
        
        

        assert.equal(40.00, textBill.getTotalCallCost());
        assert.equal(10.00, textBill.getTotalSmsCost());
        assert.equal("danger", textBill.totalClassName());

    });
});
