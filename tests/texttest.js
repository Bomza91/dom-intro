describe("The text input bill factory function", function () {

    it("should be able to enter call cost", function () {
        let textBill = TextInputBill();

        textBill.billTotal('call');
        assert.equal(2.75, textBill.getCallTotal());

      
    })

    it("should be able to enter sms cost", function () {
        let textBill = TextInputBill();

        textBill.billTotal('sms');
        assert.equal(0.75, textBill.getSmsTotal());

       
    })

    it("should be able to set warning level", function () {

        let textBill = TextInputBill();

        textBill.styleTotalColor(30);

        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
    

        assert.equal(30.25, textBill.getTotal());

    })

    it("should be able to set danger level", function () {

        let textBill = TextInputBill();

        textBill.styleTotalColor(50);

        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
       
       


        assert.equal(50, textBill.getTotal());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let textBill = TextInputBill();


        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');


        assert.equal(11, textBill.getTotal());
        assert.equal(11, textBill.getCallTotal());
        assert.equal(0.00, textBill.getSmsTotal());
    })

    it("should be able to send sms's", function () {
        let textBill = TextInputBill();

        
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');
        textBill.billTotal('sms');     

        assert.equal(3.00, textBill.getTotal());
        assert.equal(0.00, textBill.getCallTotal());
        assert.equal(3.00, textBill.getSmsTotal());
    })
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let textBill = TextInputBill();


        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');        
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        


        assert.equal("warning", textBill.styleTotalColor());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let textBill = TextInputBill();

        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');        
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
      
       
        assert.equal("critical", textBill.styleTotalColor());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let textBill = TextInputBill();

       

        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');

        assert.equal(33, textBill.getCallTotal());
        assert.equal(0, textBill.getSmsTotal());
        assert.equal("warning", textBill.styleTotalColor());
        
    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let textBill = TextInputBill();

        

        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call');
        textBill.billTotal('call')
        textBill.billTotal('call')
        

        assert.equal(52.25, textBill.getCallTotal());
        assert.equal(0, textBill.getSmsTotal());
        assert.equal("critical", textBill.styleTotalColor());

    });
});
