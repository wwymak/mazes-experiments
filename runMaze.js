var grid = require('./grid');
var a = new grid.Grid(5,5);
var b = new grid.Grid(10, 10);

// console.log(a.grid)
var binaryTree = require('./binaryTree');
var sideWinder = require('./sidewinder');
var binaryTreeLinked = binaryTree(a);
var sideWindered = sideWinder(b);
// console.log(linked.grid[0][0], linked.grid[0][0].links, Object.keys(linked.grid[0][0]), 'linked');
// console.log(a.grid[0][0], a.grid[1][2]);
a.drawCellAscii();
// b.drawCellAscii();
a.exportGridAsJson();