// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(myArray) {
    return _.sortBy(myArray, function(obj){
        return 25 - obj.quantity;
    });
};

// export the worker function as a nodejs module
module.exports = worker;