var battle = {
    name: "Global",
    stage: {id:0,description:"AA Guns Fire"},
    type: "Land",
    attacker: {},
    defender: {},
    aa:require("./aaBattle"),
    rolls:[],
    start: function () {
        // resolve aa
        if (this.stage.id == 0) {
            this.rolls = this.aa.battle(this.attacker, this.defender);
            this.stage = {id:1,description:"Resolve AA Damage"};
            return;
        }
    },
    resolve:function(){

    },
    units: {
        normal:[
            {id:"inf",name:"Infantry"},
            {id:"art",name:"Artillery"},
            {id:"mec",name:"Mechanized Infantry"},
            {id:"arm",name:"Armor"},
            {id:"aa",name:"AA Gun"}],
        air:[
            {id:"fig",name:"Fighter"},
            {id:"tac",name:"Tactical Bomber"},
            {id:"bom",name:"Bomber"}],
        upgrades:[
            {id:"upgrade_aa",name:"AA Upgrade"},
        ]
    }
}

module.exports = battle;