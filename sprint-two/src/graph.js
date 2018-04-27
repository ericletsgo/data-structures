

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var thisNode = {};
  
  thisNode.value = node;
  thisNode.edges = [];
  
  this.storage.push(thisNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var storage = this.storage;
  
  return storage.reduce(function(doesContain, ele) {
    if (ele.value === node) {
      return true;
    } else {
      return doesContain;
    }
  }, false);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage.splice(this.getIndex(node), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var indexOfTo = this.getIndex(toNode);
  var indexOfFrom = this.getIndex(fromNode);
  
  if (this.storage[indexOfTo].edges.indexOf(fromNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var indexOfTo = this.getIndex(toNode);
  var indexOfFrom = this.getIndex(fromNode);
  
  this.storage[indexOfTo].edges.push(fromNode);
  this.storage[indexOfFrom].edges.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

Graph.prototype.getIndex = function(value) {
  var storage = this.storage;
  var indexOfNode;
  
  for (var i = 0; i < storage.length; i++) {
    if (storage[i].value === value) {
      indexOfNode = i;
    }
  }
  return indexOfNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


