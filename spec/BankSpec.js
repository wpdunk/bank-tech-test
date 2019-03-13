describe("Bank", function() {
  describe("deposits", function() {
    beforeEach(function() {
      testBank = new Bank();
      testBank.deposit(1000);
    });

    it("amount to deposit can be specified", function() {
      expect(testBank.balanceHistory.slice(-1)[0].credit).toEqual(1000);
    });
    it("records date of deposit", function() {
      let date = Intl.DateTimeFormat().format(new Date());
      expect(testBank.balanceHistory.slice(-1)[0].date).toEqual(date);
    });
    it("updates account balance", function() {
      expect(testBank.balanceHistory.slice(-1)[0].balance).toEqual(1000);
    });
  });

  describe("withdrawals", function() {
    beforeEach(function() {
      testBank = new Bank();
      testBank.withdraw(500);
    });

    it("amount to withdraw can be specified", function() {
      expect(testBank.balanceHistory.slice(-1)[0].debit).toEqual(500);
    });
    it("records date of withdrawal", function() {
      let date = Intl.DateTimeFormat().format(new Date());
      expect(testBank.balanceHistory.slice(-1)[0].date).toEqual(date);
    });
    it("updates account balance", function() {
      expect(testBank.balanceHistory.slice(-1)[0].balance).toEqual(-500);
    });
  });

  describe("statement", function() {
    it("can print statement history", function() {
      spyOn(console, "log");
      testBank = new Bank();
      spyOn(testBank, "getDate").and.returnValue("30/03/2019");
      testBank.deposit(2000);
      testBank.withdraw(500);
      testBank.printStatement();
      expect(console.log)
        .toHaveBeenCalledWith(`date || credit || debit || balance
30/03/2019 ||  || 500 || 1500
30/03/2019 || 2000 ||  || 2000
`);
    });
  });
});
