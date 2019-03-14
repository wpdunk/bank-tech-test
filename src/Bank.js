class Bank {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
  }

  getBalance(amount) {
    return (this.balance += amount);
  }

  deposit(amount) {
    var newBalance = this.getBalance(amount);
    var transaction = new Transaction();
    this.balanceHistory.push(transaction.logTransaction(amount, newBalance));
  }

  withdraw(amount) {
    var newBalance = this.getBalance(-amount);
    var transaction = new Transaction();
    this.balanceHistory.push(transaction.logTransaction(-amount, newBalance));
  }

  printStatement() {
    var header = Printer.statementHeader();
    var body = Printer.statementBody(this.balanceHistory.reverse());
    console.log(header + body);
  }
}
