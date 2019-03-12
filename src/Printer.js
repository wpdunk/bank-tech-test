class Printer {
  static statementHeader() {
    return "date || credit || debit || balancen";
  }
  static statementLine(entry) {
    return `${entry.date || ""} || ${entry.credit || ""} || ${entry.debit ||
      ""} || ${entry.balance || ""}`;
  }
}
