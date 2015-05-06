exports.create = function (configuration, attacker, defender){
    var battle = require("./"+configuration+"/battle");
    battle.attacker = attacker;
    battle.defender = defender;
    return battle;
}