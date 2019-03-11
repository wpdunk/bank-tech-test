class Bank {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
  }

  getDate() {
    return Intl.DateTimeFormat().format(new Date());
  }

  deposit(amount) {
    var newBalance = this.balance + amount;
    this.balanceHistory.push({
      credit: amount,
      date: this.getDate(),
      balance: newBalance
    });
  }

  withdraw(amount) {
    var newBalance = this.balance - amount;
    this.balanceHistory.push({
      debit: amount,
      date: this.getDate(),
      balance: newBalance
    });
  }

  // balanceHistory() {
  //   // return this.balanceHistory;
  // }
}
