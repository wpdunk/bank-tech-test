class Bank {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
  }

  getDate() {
    return Intl.DateTimeFormat().format(new Date());
  }

  getBalance(amount) {
    return this.balance + amount;
  }

  deposit(amount) {
    this.balanceHistory.push({
      credit: amount,
      date: this.getDate(),
      balance: this.getBalance(amount)
    });
    console.log(this.balanceHistory);
  }

  withdraw(amount) {
    this.balanceHistory.push({
      debit: amount,
      date: this.getDate(),
      balance: this.getBalance(-amount)
    });
  }

  // printStatement() {
  //   header = Printer.statementHeader()
  //   lines =
  // }
}
