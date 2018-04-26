var Queue = function() {
  var someInstance = {};
  someInstance.sizeOf = 0;
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
		this[this.sizeOf] = value;
	},
	dequeue: function() {
		this.sizeOf--;
	}
};


