var Stack = function() {
 this.sizeOf = 0;
};

Stack.prototype.size = function() {
	return this.sizeOf;
}

Stack.prototype.push = function() {
	this.sizeOf++;
}


