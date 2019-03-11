class Bank {
  constructor() {
    this.balanceHistory = [];
  }
  deposit(amount) {
    this.balanceHistory.push({ credit: amount });
  }
  // balanceHistory() {
  //   // return this.balanceHistory;
  // }
}
