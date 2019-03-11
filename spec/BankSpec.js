describe("Bank", function() {
  describe("deposits", function() {
    it("amount to deposit can be specified", function() {
      testBank = new Bank();
      testBank.deposit(1000);
      expect(testBank.balanceHistory.slice(-1)[0].credit).toEqual(1000);
      // spyOn(testBank, "deposit").andReturn(1000);
      // expect(testBank.deposit).toHaveBeenCalledWith(1000);
    });
  });
});
