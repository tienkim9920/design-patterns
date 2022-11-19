const checkingName = require("./bridgeBank");
const TPBank = require("./tpbank");
const VPBank = require("./vpbank");


let nameTPBank = checkingName(new TPBank());
console.log(nameTPBank);

let nameVPBank = checkingName(new VPBank());
console.log(nameVPBank)