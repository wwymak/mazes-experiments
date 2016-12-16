const utils = require('./utils');
module.exports = function SideWinder(grid) {
    if(!grid.grid) {
        throw new Error("grid not instantiated");
        return
    }
    for(let i = 0; i< grid.grid.length; i++) {
        let row = grid.grid[i]
        let run = [];

        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            run.push(cell);
            let neighbors = cell.getNeighbours();
            let isAtEasternBoundary = false;
            let isAtSouthernBoundary = false;
            let finishRun = false;
            if(!neighbors.east) {
                isAtEasternBoundary = true;
            }
            if(!neighbors.south) {
                isAtSouthernBoundary = true;
            }

            if(isAtEasternBoundary || (!isAtSouthernBoundary && utils.getRandomInt(0, 2) == 0)) {
                finishRun = true;
            }
            if(finishRun) {
                let cellToLink = run[utils.getRandomInt(0, run.length)];
                let neighbors = cellToLink.getNeighbours()
                if(neighbors.south) {
                    cellToLink.link(neighbors.south)
                    run = [];
                }
            } else {
                cell.link(neighbors.east);
            }
        }
    }
    return grid;
};