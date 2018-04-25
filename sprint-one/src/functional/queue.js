var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size ++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    size --;
    if (size < 0) {
      size = 0;
    }
    var itemToRemove = storage['1'];
    delete storage['1'];
    var index = 1;
    var newStorage = {};
    for (var key in storage) {
      newStorage[index] = storage[key];
    }
    storage = newStorage;
    return itemToRemove;  
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
