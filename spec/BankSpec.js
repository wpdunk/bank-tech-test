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
});
