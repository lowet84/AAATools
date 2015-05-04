var infantry = {
    name: "Infantry",
    id: "inf",
    attack: 1,
    defense: 2,
    support: {
        attack: 2,
        supportType: "Artillery"
    },
    price: 3
};

var mechanized = {
    name: "Mechanized Infantry",
    id: "mec",
    attack: 1,
    defense: 2,
    support: {
        attack: 2,
        type: "Artillery"
    },
    price: 4
};

var artillery = {
    name: "Artillery",
    id: "art",
    attack: 2,
    defense: 2,
    support: {
        give: 1,
        type: "Artillery"
    },
    price: 4
};

var armor = {
    name: "Armor",
    id: "arm",
    attack: 3,
    defense: 3,
    price: 6
};

var aa = {
    name: "AA Gun",
    id: "aa",
    defendOnce: {
        attack: 1,
        rolls: 3,
        attackType: "Air"
    },
    price: 5
};

var fighter = {
    name: "Fighter",
    id: "fig",
    attack: 3,
    defense: 4,
    support: {attack: 4, type: "Tactical"},
    type: "Air",
    price: 10
};

var tactical = {
    name: "Tactical Bomber",
    id: "tac",
    attack: 3,
    defense: 3,
    support: {
        give: 1,
        type: "Tactical"
    },
    type: "Air",
    price: 11
};

var bomber = {
    name: "Bomber",
    id: "bom",
    attack: 4,
    defense: 1,
    type: "Air",
    price: 10
};

var units = [infantry, mechanized, artillery, armor, aa, fighter, tactical, bomber];

module.exports = units;