const fs = require('fs');
var grid = require('./grid');
var a = new grid.Grid(25,25);
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
let gridJsonForDraw = a.exportGridForDraw();
fs.writeFile('./visuals/binaryTree2.json', gridJsonForDraw, (err, result) => {
    if(err) {
        console.log('error', err);
    } else {
        console.log('done');
    }
});