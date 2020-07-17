describe("The calculate bill factory function", function () {
    it("should be able to enter a string of calls", function () {
        let calculate = CalculateBill();

        calculate.setCallCost(2.75);
        assert.equal(2.75, calculate.getCallCost());

        let calculate2 = CalculateBill();
        calculate2.setCallCost(1.85);
        assert.equal(1.85, calculate2.getCallCost());
    })

    it("should be able to enter a string of sms", function () {
        let calculate = CalculateBill();

        calculate.setSmsCost(0.75);
        assert.equal(0.75, calculate.getSmsCost());

        let calculate2 = CalculateBill();
        calculate2.setSmsCost(0.65);
        assert.equal(0.65, calculate2.getSmsCost());
    })

    it("should be able to enter a string of sms & calls", function () {
        let calculate = CalculateBill();

        calculate.getCallCost(2.75);
        calculate.getSmsCost(0.85);

        calculate.setSmsCost(0.85);
        calculate.setCallCost(2.75);


        assert.equal(0.85, calculate.getSmsCost());
        assert.equal(2.75, calculate.getCallCost());

        let calculate2 = CalculateBill();

        calculate2.setCallCost(1.75);
        calculate2.setSmsCost(0.65);

        assert.equal(1.75, calculate2.getCallCost());
        assert.equal(0.65, calculate2.getSmsCost());

    })

});


