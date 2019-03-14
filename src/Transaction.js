class Transaction {
  getDate() {
    return Intl.DateTimeFormat().format(Date.now());
  }
  getBalance(amount, oldBalance) {
    return amount + oldBalance;
  }

  logTransaction(amount, oldBalance) {
    if (amount < 0) {
      return {
        date: this.getDate(),
        debit: -amount,
        balance: this.getBalance(amount, oldBalance)
      };
    } else {
      return {
        date: this.getDate(),
        credit: amount,
        balance: this.getBalance(amount, oldBalance)
      };
    }
  }
}
