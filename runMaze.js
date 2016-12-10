var grid = require('./grid');
var a = grid.Grid(5,5);


// console.log(a.grid)
var binaryTree = require('./binaryTree');
var linked = binaryTree(a);
// console.log(linked.grid[0][0], linked.grid[0][0].links, Object.keys(linked.grid[0][0]), 'linked');
// console.log(a.grid[0][0], a.grid[1][2]);
a.drawCellAscii();