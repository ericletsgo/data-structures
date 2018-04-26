var Stack = function() {
  var someInstance = {};
  someInstance.sizeOf = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
	size: function() {
		return this.sizeOf;
	},
	push: function(value) {
		this.sizeOf++;
	}
};


