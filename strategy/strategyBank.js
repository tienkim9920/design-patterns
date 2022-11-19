class StrategyBank {
    constructor(bank) {
        this.name = bank;
    }

    checkingName() {
        console.log(this.name.checkingName());
    }
}

module.exports = StrategyBank;