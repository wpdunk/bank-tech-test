class Bank {
  constructor() {
    this.balance = 0;
    this.balanceHistory = [];
  }

  deposit(amount) {
    var dateString = Intl.DateTimeFormat().format(new Date());
    var newBalance = this.balance + amount;
    this.balanceHistory.push({
      credit: amount,
      date: dateString,
      balance: newBalance
    });
  }
  // balanceHistory() {
  //   // return this.balanceHistory;
  // }
}
