//noinspection SpellCheckingInspection
var Enumerable = require('linq');

var attacker = {inf: 10, art: 3, arm: 2};
var defender = {inf: 3, mec: 2, arm: 1, fig: 1};

battleRound(attacker, defender);


function battleRound(attacker, defender) {
    var units = require('./units');

    var defendOnce = Enumerable.from(units)
        .where(function(x){return x.defendOnce != undefined})
        .select(function(x){return x.defendOnce})
        .toArray();



    var x = 0; x++;
}