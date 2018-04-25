var Queue = function() {
  var someInstance = {};
  someInstance.sizeOf = 0;
  someInstance.size = queueMethods.getSize;
  return someInstance;
};

var queueMethods = {
	getSize: function() {
		return this.sizeOf;
	}
};


