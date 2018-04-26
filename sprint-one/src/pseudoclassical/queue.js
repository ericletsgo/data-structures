var Queue = function() {
  this.sizeOf = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
	return this.sizeOf;
}

Queue.prototype.enqueue = function(value) {
	this.sizeOf++;
	this.storage[this.sizeOf] = value;
}

Queue.prototype.dequeue = function() {
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


