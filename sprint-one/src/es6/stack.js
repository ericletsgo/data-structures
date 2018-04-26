class Stack {
  constructor() {
  	this.sizeOf = 0;
  	this.storage = {};
  }

  size() {
  	return this.sizeOf;
  }

  push(value) {
  	this.sizeOf++;
  	this.storage[this.sizeOf] = value;
  }

  pop() {
  	var itemToRemove = this.storage[this.sizeOf];
  	delete this.storage[this.sizeOf];
  	this.sizeOf--;
  	if (this.sizeOf < 0) {
  		this.sizeOf = 0;
  	}
  	return itemToRemove;
  }
}