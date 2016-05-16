// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(obj) {
	return _.forEach(obj, function(item){
		if (item.population > 0.58) {
			item.size = 'big';
		} else if (item.population > 0.28) {
			item.size = 'med';
		} else {
			item.size = 'small';
		}
	});
};

// export the worker function as a nodejs module
module.exports = worker;