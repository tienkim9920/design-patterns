const StrategyBank = require("./strategyBank");
const TPBank = require("./tpbank");
const VPBank = require("./vpbank");


let nameTPBank = new StrategyBank(new TPBank());
nameTPBank.checkingName();

let nameVPBank = new StrategyBank(new VPBank());
nameVPBank.checkingName();