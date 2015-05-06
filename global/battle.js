var battle = {
    name: "Global",
    stage: 0,
    type: "Land",
    attacker: {},
    defender: {},
    aa: require("./aaBattle"),
    rolls: [],
    start: function () {
        // resolve aa
        if (this.stage == 0) {
            this.rolls = this.aa.battle(this.attacker, this.defender);
            this.stage = 1;
            return;
        }
        if (this.stage == 1 && this.rolls.count()) {
            this.stage = 2;
        }
    },
    resolve: function (attacker, defender) {
        var unresolved = require("linq")
            .from(this.rolls)
            .where(function (d) {
                return d.value <= d.target
            })
            .toArray();

        for(i=0;i<unresolved.length;i++){

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