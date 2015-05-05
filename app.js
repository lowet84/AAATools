//noinspection SpellCheckingInspection
var Enumerable = require('linq');

var attacker = {inf: 6, art: 3};
var defender = {inf: 10};

battleRound(attacker, defender);


function battleRound(attacker, defender) {
    var units = require('./units');

    var testConditions = [];
    var priority = getPriority(units[2], testConditions);
    addConditions(units[1], testConditions);
    addConditions(units[1], testConditions);
    addConditions(units[1], testConditions);
    var x = 0;
    x++;
}

function getPriority(unit, conditions) {
    if (unit.priority == undefined) {
        return {priority: 0, conditions: conditions}
    }
    for (i = 0; i < unit.priority.length; i++) {
        var priority = unit.priority[i];
        if (priority.condition == undefined) {
            return priority.value;
        }

        var condition = Enumerable.from(conditions)
            .firstOrDefault(function (d) {
                return d.name == priority.condition
            });

        if (priority.invertCondition == true) {
            if (condition == undefined || condition.value == 0) {
                return priority.value;
            }
        }
        else if (condition.name == priority.condition) {
            if(condition.value!=0){
                condition.value--;
                return priority.value;
            }
        }
    }
}

function addConditions(unit,conditions, type){
    for(i=0;i<unit.conditions.length;i++){
        var condition = unit.conditions[i];

        if(condition.type != type){
            continue;
        }

        var existing = Enumerable.from(conditions)
            .firstOrDefault(function (d) {
                return d.name == condition.name
            });
        if(existing == undefined){
            if(condition.value==undefined){
                condition.value=1;
            }
            conditions.push(condition)
        }
        else{
            if(condition.value==-1){
                existing.value = -1;
            }
            else{
                existing.value++;
            }
        }
    }
}