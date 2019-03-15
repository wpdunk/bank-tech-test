class Bank {
  constructor(printer, transaction) {
    this.printer = printer;
    this.transaction = new transaction();
    this.balance = 0;
    this.balanceHistory = [];
  }

  getBalance(amount) {
    return (this.balance += amount);
  }

  deposit(amount) {
    var newBalance = this.getBalance(amount);
    // var newTransaction = new this.transaction;
    this.balanceHistory.push(
      this.transaction.logTransaction(amount, newBalance)
    );
  }

  withdraw(amount) {
    var newBalance = this.getBalance(-amount);
    this.balanceHistory.push(
      this.transaction.logTransaction(-amount, newBalance)
    );
  }

  printStatement() {
    var header = this.printer.statementHeader();
    var body = this.printer.statementBody(this.balanceHistory.reverse());
    console.log(header + body);
  }
}
