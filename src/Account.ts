import CurrencyAPI from "./CurrencyAPI";

export default class Account {
    private balance: number;

    constructor(readonly currencyAPI: CurrencyAPI) {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(newBalance: number) {
        this.balance += newBalance;
    }

    credit(amount: number, currency?: string) {
        if(currency){
            amount = this.currencyAPI.convert(amount, currency);
        }

        this.setBalance(amount);
    }

    debit(amount: number) {
        this.balance -= amount;
    }
}
