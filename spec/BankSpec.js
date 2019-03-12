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

  xdescribe("statement", function() {
    it("can print statement history", function() {
      testBank = new Bank();
      testBank.deposit(1000);
      testBank.deposit(2000);
      testBank.withdraw(500);
      expect(
        testBank.printStatement().toEqual(`
      date || credit || debit || balance \n
      12/03/2019 || || 500.00 || 2500.00 \n
      12/03/2019 || 2000.00 || || 3000.00 \n
      12/03/2019 || 1000.00 || || 1000.00 \n
      `)
      );
    });
  });
});
