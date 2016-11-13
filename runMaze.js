var grid = require('./grid');
var a = grid.Grid(3,3);

var binaryTree = require('./binaryTree');
var linked = binaryTree(a);
console.log(linked.grid[0], 'linked');
// console.log(a.grid[0][0], a.grid[1][2]);
