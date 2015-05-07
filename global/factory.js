module.exports = {
    types:["land","air"],
    create: function (type,attacker,defender) {
        if (type == "land") {
            var battle = require("./landBattle");
            battle.attacker = attacker;
            battle.defender = defender;
            return battle;
        }
    }
}