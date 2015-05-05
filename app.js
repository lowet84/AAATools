//noinspection SpellCheckingInspection
var Enumerable = require('linq');

var attacker = {inf: 6, art: 3, fig:1, tac:1,bom:1};
var defender = {inf: 10, aa: 2};

var x = 0;

landBattleRound(attacker, defender);


function landBattleRound(attacker, defender) {
    var aaDies = Enumerable.from([defender.aa * 3,
        (attacker.fig ? attacker.fig : 0) + (attacker.tac ? attacker.tac : 0) + (attacker.bom ? attacker.bom : 0)]).min()



    var attackDies = [0,0,0,0];
    var defenseDies = [0,0,0,0];


}