var infantry = {name:"Infantry",attack:1,defense:2,support:{attackSupport:2,supportType:"Artillery"},price:3};
var mech = {name:"Mechanized Infantry",attack:1,defense:2,support:{attackSupport:2,supportType:"Artillery"},price:4};
var artillery = {name:"Artillery",attack:2,defense:2,support:{giveSupport:1,supportType:"Artillery"},price:4};
var armor = {name:"Armor",attack:3,defense:3,price:6};
var aa = {name:"AA Gun",attackOnce:{attack:1,rolls:3,attackType:"Air"},price:5};
var fighter = {name:"Fighter",attack:3,defense:4,support:{attackSupport:4,supportType:"Tactical"},type:"Air",price:10};
var tactical = {name:"Tactical Bomber",attack:3,defense:3,support:{giveSupport:1,supportType:"Tactical"},type:"Air",price:11};
var bomber = {name:"Bomber",attack:4,defense:1,type:"Air",price:10};
