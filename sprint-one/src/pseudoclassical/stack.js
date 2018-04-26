var Stack = function() {
 this.sizeOf = 0;
 this.storage = {};
};

Stack.prototype.size = function() {
	return this.sizeOf;
}

Stack.prototype.push = function(value) {
	this.sizeOf++;
	this.storage[this.sizeOf] = value;
}

Stack.prototype.pop = function() {
	var itemToRemvoe = this.storage[this.sizeOf];
	delete this.storage[this.sizeOf]
	this.sizeOf--;
	if (this.sizeOf < 0) {
		this.sizeOf = 0;
	}
	return itemToRemvoe;
}


