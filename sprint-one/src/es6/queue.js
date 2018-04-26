class Queue {
  constructor() {
  	this.sizeOf = 0;
  	this.storage = {};
  }
  size() {
  	return this.sizeOf;
  }

  enqueue(value) {
    this.sizeOf++;
	this.storage[this.sizeOf] = value;
  }

  dequeue() {
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
}
