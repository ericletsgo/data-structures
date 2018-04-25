var Stack = function() {
  var someInstance = {};
  someInstance.sizeOf = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.getSize;
  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.sizeOf++;
		this[this.sizeOf] = value;
	},
	pop: function() {
		var itemToRemove = this[this.sizeOf];
		delete this[this.sizeOf];
		this.sizeOf--;
		if (this.sizeOf < 0) {
			this.sizeOf = 0;
		}
		return itemToRemove;
	},
	getSize: function() {
		return this.sizeOf;
	}
};

