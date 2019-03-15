describe("Bank", function() {
  describe("deposits", function() {
    beforeEach(function() {
      var printer = jasmine.createSpy("printer");
      var transaction = jasmine.createSpyObj("transaction", {
        logTransaction: { date: "13/03/2019", credit: 1000, balance: 1000 }
      });
      testBank = new Bank(printer, transaction);
      testBank.deposit(1000);
    });

    it("amount to deposit can be specified", function() {
      expect(testBank.balanceHistory.slice(-1)[0].credit).toEqual(1000);
    });
    it("updates account balance", function() {
      expect(testBank.balanceHistory.slice(-1)[0].balance).toEqual(1000);
    });
  });

  describe("withdrawals", function() {
    beforeEach(function() {
      var printer = jasmine.createSpy("printer");
      var transaction = jasmine.createSpyObj("transaction", {
        logTransaction: { date: "13/03/2019", debit: 500, balance: -500 }
      });
      testBank = new Bank(printer, transaction);
      testBank.withdraw(500);
    });

    it("amount to withdraw can be specified", function() {
      expect(testBank.balanceHistory.slice(-1)[0].debit).toEqual(500);
    });

    it("updates account balance", function() {
      expect(testBank.balanceHistory.slice(-1)[0].balance).toEqual(-500);
    });
  });

  describe("statement", function() {
    beforeEach(function() {
      var printer = jasmine.createSpyObj("printer", {
        statementHeader: "date || credit || debit || balance\n",
        statementBody: `30/03/2019 ||  || 500 || 1500\n30/03/2019 || 2000 ||  || 2000\n`
      });
      testBank = new Bank(printer);
      spyOn(console, "log");
      testBank.printStatement();
    });
    it("can print statement history", function() {
      expect(console.log)
        .toHaveBeenCalledWith(`date || credit || debit || balance
30/03/2019 ||  || 500 || 1500
30/03/2019 || 2000 ||  || 2000
`);
    });
  });
});
