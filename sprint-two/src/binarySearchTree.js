var BinarySearchTree = function(value) {
  var obj = createNode(value);
  _.extend(obj, methods);
  return obj;
};


var methods = {};

methods.insert = function(val) {
  var newNode = createNode(val);
  _.extend(newNode, methods);
  var currentNode = this;
  while(currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        currentNode = null;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        currentNode = null;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

methods.contains = function(val) {
  if (this.value === val) {
    return true;
  } else if (this.left && val < this.value) {
     return this.left.contains(val);
  } else if (this.right) {
    return this.right.contains(val);
  }
  return false;
}

methods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb) ;
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

var createNode = function(val) {
  var obj = {};
  obj.value = val;
  obj.left = null;
  obj.right = null;
  return obj;
}


/*
 * Complexity: What is the time complexity of the above functions?
 * insert is a logarithmic time operation.
 * contains is a logarithmic time operation.
 * depthFirstLog is a linear time operation.
 */
