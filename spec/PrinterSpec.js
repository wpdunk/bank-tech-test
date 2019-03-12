describe("Printer", function() {
  it("prints statement header", function() {
    expect(Printer.statementHeader()).toContain(
      "date || credit || debit || balance"
    );
  });
  it("prints statement line", function() {
    let entry = {
      credit: 1000,
      date: "12/03/2019",
      balance: 1000
    };
    expect(Printer.statementLine(entry)).toContain(
      "12/03/2019 || 1000 ||  || 1000"
    );
  });
  it("prints statement body", function() {
    let entriesArray = [
      {
        credit: 1000,
        date: "12/03/2019",
        balance: 1000
      },
      {
        credit: 1000,
        date: "12/03/2019",
        balance: 1000
      }
    ];
    expect(Printer.statementBody(entriesArray)).toContain(
      "12/03/2019 || 1000 ||  || 1000\n12/03/2019 || 1000 ||  || 1000\n"
    );
  });
});
