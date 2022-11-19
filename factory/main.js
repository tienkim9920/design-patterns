const { TP_BANK, VP_BANK } = require("./constant");
const FactoryBank = require("./factoryBank");

let nameTPBank = new FactoryBank(TP_BANK);
console.log(nameTPBank.name);

let nameVPBank = new FactoryBank(VP_BANK);
console.log(nameVPBank.name)