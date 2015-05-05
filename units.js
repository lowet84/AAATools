var infantry = {
    name: "Infantry",
    id: "inf",
    values: [
        {turn: 0, value: 2, condition: "artillery"},
        {turn: 0, value: 1, condition: "artillery", invertCondition:true},
        {turn: 1, value: 2}],
    price: 3
};

var artillery = {
    name: "Artillery",
    id: "art",
    values: [
        {turn: 0, value: 2},
        {turn: 1, value: 2}],
    conditions: [{name: "artillery"}],
    price: 4
}

var aa = {
    name: "AA Gun",
    id: "aa",
    values: [
        {turn: 0, value: 1}],
    conditions:[{name:"aaFired",type:"permanent", value:-1}],
    priority:[
        {value:1,condition:"aaFired", invertCondition:true},
        {value:-1,condition:"aaFired"}
    ],
    price: 5
}

var units = [infantry, artillery, aa];

module.exports = units;