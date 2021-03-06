describe("Bank Feature", function() {
  it("Can deposit, withdraw and print statement", function() {
    spyOn(console, "log");
    spyOn(Date, "now").and.returnValue(1552435200000);
    testBank = new Bank(Printer, Transaction);
    testBank.deposit(1000);
    testBank.deposit(2000);
    testBank.withdraw(500);
    testBank.printStatement();
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance
13/03/2019 ||  || 500 || 2500
13/03/2019 || 2000 ||  || 3000
13/03/2019 || 1000 ||  || 1000
`);
  });
});
