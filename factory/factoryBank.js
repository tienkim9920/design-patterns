const { VP_BANK, TP_BANK } = require("./constant");
const TPBank = require("./tpbank");
const VPBank = require("./vpbank");

class FactoryBank {
    constructor(category) {
        switch (category) {
            case VP_BANK:
                return new VPBank();
            case TP_BANK:
                return new TPBank();
        }
    }
}

module.exports = FactoryBank;