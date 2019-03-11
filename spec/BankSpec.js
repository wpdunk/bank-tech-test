describe("Bank", function() {
  describe("deposits", function() {
    it("amount to deposit can be specified", function() {
      testBank = new Bank();
      testBank.deposit(1000);
      expect(testBank.balanceHistory.slice(-1)[0].credit).toEqual(1000);
    });
    it("records date of deposit", function() {
      testBank = new Bank();
      testBank.deposit(1000);
      expect(testBank.balanceHistory.slice(-1)[0].date).toEqual("11/03/2019");
    });
  });
});
