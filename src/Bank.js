class Bank {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
  }

  getDate() {
    console.log(Intl.DateTimeFormat().format(new Date()));
    return Intl.DateTimeFormat().format(new Date());
  }

  getBalance(amount) {
    this.balance += amount;
    return this.balance;
  }

  deposit(amount) {
    this.balanceHistory.push({
      credit: amount,
      date: this.getDate(),
      balance: this.getBalance(amount)
    });
  }

  withdraw(amount) {
    this.balanceHistory.push({
      debit: amount,
      date: this.getDate(),
      balance: this.getBalance(-amount)
    });
  }

  printStatement() {
    var header = Printer.statementHeader();
    var body = Printer.statementBody(this.balanceHistory.reverse());
    console.log(header + body);
  }
}
