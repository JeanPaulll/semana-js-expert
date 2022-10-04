"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(currencyAPI) {
        this.currencyAPI = currencyAPI;
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(newBalance) {
        this.balance += newBalance;
    }
    credit(amount, currency) {
        if (currency) {
            amount = this.currencyAPI.convert(amount, currency);
        }
        this.setBalance(amount);
    }
    debit(amount) {
        this.balance -= amount;
    }
}
exports.default = Account;
