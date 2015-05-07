exports.getFactory = function (configuration){
    return require("./"+configuration+"/factory")
}