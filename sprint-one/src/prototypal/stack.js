var Stack = function() {
  var someInstance = {};
  someInstance = Object.create(stackMethods);
  someInstance.sizeOf = 0;
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
	size: function() {
		return this.sizeOf;
	}
};

