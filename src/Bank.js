class Bank {
  constructor() {
    this.balanceHistory = [];
  }
  deposit(amount) {
    var dateString = Intl.DateTimeFormat().format(new Date());
    this.balanceHistory.push({ credit: amount, date: dateString });
  }
  // balanceHistory() {
  //   // return this.balanceHistory;
  // }
}
