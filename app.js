var units = require('./units');
var Enumerable = require('./node_modules/linq/linq');

var test = Enumerable.from(units).firstOrDefault(function(x){ return x.name == "Armor"});

var x =0;
x++;

