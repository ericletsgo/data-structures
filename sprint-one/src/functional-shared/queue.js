var Queue = function() {
  var someInstance = {};
  someInstance.sizeOf = 0;
  someInstance.storage = {};
  someInstance.size = queueMethods.getSize;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  return someInstance;
};

var queueMethods = {
	getSize: function() {
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


