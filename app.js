var attacker = {inf: 6, art: 3, fig:1, tac:1, bom:1};
var defender = {inf: 10, aa: 2};

var battle = require("./global/battle");
battle.attacker = attacker;
battle.defender = defender;
battle.start();

var x = 0;