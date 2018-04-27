var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  var doesContain = false;
  var checkNode = function(node) {
    if (node.value === target) {
      doesContain = true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i]);
      }
    }
  };
  checkNode(this);
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
