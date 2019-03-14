class Transaction {
  getDate() {
    return Intl.DateTimeFormat().format(Date.now());
  }

  logTransaction(amount, balance) {
    if (amount < 0) {
      return {
        date: this.getDate(),
        debit: -amount,
        balance: balance
      };
    } else {
      return {
        date: this.getDate(),
        credit: amount,
        balance: balance
      };
    }
  }
}
