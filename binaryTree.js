const utils = require('./utils');
module.exports = function BinaryTree(grid) {
    if(!grid.grid) {
        throw new Error("grid not instantiated");
        return
    }
    for(let i = 0; i< grid.grid.length; i++) {
        let row = grid.grid[i];
        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            let neighbors = cell.getNeighbours();
            let neighborsArr = [];
            let linkedCell;
            if(neighbors.south) {
                neighborsArr.push(neighbors.south);
            }
            if(neighbors.east) {
                neighborsArr.push(neighbors.east);
            }
            if(neighborsArr.length > 0) {
                linkedCell = neighborsArr[utils.getRandomInt(0, neighborsArr.length)];
            }
            if(linkedCell) {
                cell.link(linkedCell);
            }
        }
    }

    return grid;
}