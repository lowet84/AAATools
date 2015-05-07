var battle = {
    name: "Global",
    stage: 0,
    type: "Land",
    attacker: {},
    defender: {},
    rolls: [],
    start: function () {
        // resolve aa
        if (this.stage == 0) {
            var aa = require("./aaBattle");
            this.rolls = aa.battle(this.attacker, this.defender);
            this.stage = 1;
        }
        else if (this.stage == 1 && this.rolls.count() == 0) {
            this.stage = 2;
        }
        else if(this.stage==3){

        }
    },
    resolve: function (attacker, defender) {
        var unresolved = require("linq")
            .from(this.rolls)
            .where(function (d) {
                return d.value <= d.target
            })
            .toArray();

        for (i = 0; i < unresolved.length; i++) {

        }


        var x = 0;
    },
    units: {
        normal: [
            {id: "inf", name: "Infantry"},
            {id: "art", name: "Artillery"},
            {id: "mec", name: "Mechanized Infantry"},
            {id: "arm", name: "Armor"},
            {id: "aa", name: "AA Gun"}],
        air: [
            {id: "fig", name: "Fighter"},
            {id: "tac", name: "Tactical Bomber"},
            {id: "bom", name: "Bomber"}],
        upgrades: [
            {id: "upgrade_aa", name: "AA Upgrade"},
        ]
    },
    stages: [
        {id: 0, name: "AA Guns Fire"},
        {id: 1, name: "Resolve AA Damage"}
    ]
}

module.exports = battle;