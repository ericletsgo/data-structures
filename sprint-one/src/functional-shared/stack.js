var Stack = function() {
  var someInstance = {};
  someInstance.size = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.getSize = stackMethods.size;
  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.size++;
	},
	pop: function() {
		this.size--;
	},
	getSize: function() {
		return this.size;
	}
};

