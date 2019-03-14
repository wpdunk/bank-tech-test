describe("Bank", function() {
  describe("deposits", function() {
    beforeEach(function() {
      testBank = new Bank();
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
      testBank = new Bank();
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
    it("can print statement history", function() {
      spyOn(Printer, "statementHeader").and.returnValue(
        "date || credit || debit || balance\n"
      );
      spyOn(Printer, "statementBody").and.returnValue(
        `30/03/2019 ||  || 500 || 1500\n30/03/2019 || 2000 ||  || 2000\n`
      );
      spyOn(console, "log");
      testBank = new Bank();
      testBank.printStatement();
      expect(console.log)
        .toHaveBeenCalledWith(`date || credit || debit || balance
30/03/2019 ||  || 500 || 1500
30/03/2019 || 2000 ||  || 2000
`);
    });
  });
});
