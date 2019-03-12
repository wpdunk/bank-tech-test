class Printer {
  static statementHeader() {
    return "date || credit || debit || balancen";
  }
  static statementLine(entry) {
    return `${entry.date || ""} || ${entry.credit || ""} || ${entry.debit ||
      ""} || ${entry.balance || ""}\n`;
  }
  static statementBody(entriesArray) {
    var stringArray = [];
    entriesArray.forEach(function(element) {
      stringArray.push(Printer.statementLine(element));
    });
    return stringArray.join("");
  }
}
