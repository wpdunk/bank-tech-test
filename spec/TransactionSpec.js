describe("Transaction", function() {
  it("records date of transaction", function() {
    spyOn(Date, "now").and.returnValue(1552435200000);
    deposit1 = new Transaction();
    expect(deposit1.getDate()).toEqual("13/03/2019");
  });

  it("recalculates balance after each transaction", function() {
    deposit2 = new Transaction();
    expect(deposit2.getBalance(100, 0)).toEqual(100);
  });

  it("logs deposit transaction info date/deposit/credit/balance", function() {
    spyOn(Date, "now").and.returnValue(1552435200000);
    deposit3 = new Transaction();
    expect(deposit3.logTransaction(500, 0).credit).toEqual(500);
    expect(deposit3.logTransaction(500, 0).date).toEqual("13/03/2019");
    expect(deposit3.logTransaction(500, 0).balance).toEqual(500);
    // "{date: 13/03/2019, credit: 500, balance: 500}"
  });
  it("logs withdrawal transaction info date/deposit/credit/balance", function() {
    spyOn(Date, "now").and.returnValue(1552435200000);
    withdrawal1 = new Transaction();
    expect(withdrawal1.logTransaction(-100, 200).debit).toEqual(100);
    expect(withdrawal1.logTransaction(-100, 200).date).toEqual("13/03/2019");
    expect(withdrawal1.logTransaction(-100, 200).balance).toEqual(100);
  });
});
