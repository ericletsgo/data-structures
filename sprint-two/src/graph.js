

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.indexOf(node) !== -1) {
    return true;
  } else {
    return false;
  }    
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.storage.indexOf(node);
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(node) !== -1) {
      this.edges.splice(i, 1);
    }
  }
  this.storage.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(fromNode) !== -1 && this.edges[i].indexOf(toNode) !== -1) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(fromNode) !== -1 && this.edges[i].indexOf(toNode) !== -1) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.storage.forEach(cb);
};

// Graph.prototype.getIndex = function(value) {
//   var storage = this.storage;
//   var indexOfNode;
  
//   for (var i = 0; i < storage.length; i++) {
//     if (storage[i].value === value) {
//       indexOfNode = i;
//     }
//   }
//   return indexOfNode;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


