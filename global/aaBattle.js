exports.battle = function (attacker, defender) {
    var Enumerable = require('linq');
    var x =0;
    var aaDies = Enumerable.from([defender.aa * 3,
        (attacker.fig ? attacker.fig : 0) +
        (attacker.tac ? attacker.tac : 0) +
        (attacker.bom ? attacker.bom : 0)])
        .min();

    var toRoll = defender.upgrade_aa != undefined ? 2 : 1;

    var rolls = [];
    for(i=0;i<aaDies;i++){
        rolls.push({side:"attacker",value:Math.ceil(Math.random()*6),target:toRoll, type:"air"});
    }

    var hits = Enumerable.from(rolls).count(function(x){return x<=toRoll});
    return rolls;
}