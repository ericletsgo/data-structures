var Queue = function() {
  var someInstance = {};
  someInstance = Object.create(queueMethods)
  someInstance.storage = {};
  someInstance.sizeOf = 0;
  return someInstance;
};

var queueMethods = {
	size: function() {
		return this.sizeOf;
	},
	enqueue: function(value) {
		this.sizeOf++;
		this.storage[this.sizeOf] = value;
	},
	dequeue: function() {
		this.sizeOf--;
		if (this.sizeOf < 0) {
			this.sizeOf = 0;
		}
		var itemToRemove = this.storage['1'];
		delete this.storage['1'];
		var index = 1;
		var newStorage = {};
		for (var key in this.storage) {
			newStorage[index] = this.storage[key]
			index++;
		}
		this.storage = newStorage;
		return itemToRemove;
	}
};


