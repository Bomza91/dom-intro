describe("The radio bill button factory function", function () {
    it("should be able to set call cost", function () {
        let radioBtn = RadioBill();

        radioBtn.radioButtons('call');
        assert.equal(2.75, radioBtn.getCallTotal());

        let radioBtn2 = RadioBill();
        radioBtn.radioButtons('call');
        assert.equal(0, radioBtn2.getCallTotal());
    })


    it("should be able to set sms cost", function () {
        let radioBtn = RadioBill();
        radioBtn.radioButtons('sms');
        
        assert.equal(0.75, radioBtn.getSmsTotal());

        let radioBtn2 = RadioBill();
        radioBtn2.radioButtons(0.65);
        assert.equal(0, radioBtn2.getSmsTotal());
    })

    it("should be able to set warning level", function () {

        let radioBtn = RadioBill();

        radioBtn.styleTotalColor(30);

        assert.equal(0, radioBtn.getTotal());

    })

    it("should be able to set danger level", function () {

        let radioBtn = RadioBill();

        radioBtn.styleTotalColor(50);

        assert.equal(0, radioBtn.getTotal());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let radioBtn = RadioBill();

        radioBtn.radioButtons(2.75);
        radioBtn.radioButtons(0.75);
        radioBtn.styleTotalColor(30);
        radioBtn.styleTotalColor(50);

        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call'); 
        radioBtn.radioButtons('call');
        
        assert.equal(19.25, radioBtn.getTotal());
        assert.equal(19.25, radioBtn.getCallTotal());
        assert.equal(0.00, radioBtn.getSmsTotal());
    })

    it("should be able to send sms's", function () {
        let radioBtn = RadioBill();

        radioBtn.radioButtons(2.75);
        radioBtn.radioButtons(0.75);
        radioBtn.styleTotalColor(30);
        radioBtn.styleTotalColor(50);

        radioBtn.radioButtons('sms');
        radioBtn.radioButtons('sms');
        radioBtn.radioButtons('sms');
        radioBtn.radioButtons('sms');
     
        assert.equal(3, radioBtn.getTotal());
        assert.equal(0.00, radioBtn.getCallTotal());
        assert.equal(3, radioBtn.getSmsTotal());
    })
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let radioBtn = RadioBill();

     

        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call'); 
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
       
       
    
        assert.equal("warning", radioBtn.styleTotalColor());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let radioBtn = RadioBill();
       
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call'); 
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
       
       

        assert.equal("critical", radioBtn.styleTotalColor());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let radioBtn = RadioBill();



        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');

        

        assert.equal(41.25, radioBtn.getCallTotal());
        assert.equal("warning", radioBtn.styleTotalColor());
       
        radioBtn.radioButtons('call');
        
        assert.equal(44, radioBtn.getCallTotal());
        assert.equal("warning", radioBtn.styleTotalColor());

    });


    it("it should return critical if the total more than fifty", function () {
        let radioBtn = RadioBill();

        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');
        radioBtn.radioButtons('call');

        assert.equal(57.75, radioBtn.getCallTotal());
        
        assert.equal("critical", radioBtn.styleTotalColor());

    });
});
