// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(myList) {
    return _.filter(myList, {'active': true});
};
    
// export the worker function as a nodejs module
module.exports = worker;