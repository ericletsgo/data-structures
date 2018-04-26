var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  

  list.addToTail = function(value) { 
    var currentNode = new Node(value)
    
    if (list.head === null) {
      list.head = currentNode;
      list.tail = currentNode; 
    } else {
      list.tail.next = currentNode;
      list.tail = currentNode;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    
    list.head = list.head.next; 
    
    return headValue;
  };

  list.contains = function(target) {
    var doesContain = false;
    checkNode = function(node) {
      if (node.value === target) {
        doesContain = true;
      } else {
        if (node.next !== null) {
          checkNode(node.next);
        }
      }
    }
    checkNode(list.head);
    return doesContain;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
