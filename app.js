var attacker = {inf: 6, art: 3, fig: 1, tac: 1, bom: 1};
var defender = {inf: 10, aa: 2, upgrade_aa: 1};

var factory = require("./factoryHelper").getFactory("global");

var battle = factory.create("land", attacker, defender);

battle.start();
battle.rolls.push({side:"attacker",value:1,target:4})
battle.resolve();

var x =0;
