var cell = require('./cell');
var utils = require('./utils');
function Grid(rows, columns) {
    var gridInstance = this;
    this.rows = rows;
    this.columns = columns;
    this.grid = prepareGrid();
    configureCells(this.grid);

    function prepareGrid() {
        let rowArr = new Array(rows).fill(0).map((d, i) => i);
        let colArr = new Array(columns).fill(0).map((d, i) => i);
        let cellArr = [];
        for (let i = 0; i< rowArr.length; i++) {
            let column = [];
            for (let j = 0; j< colArr.length; j++) {
                // console.log(typeof rowArr[i], typeof colArr[j], rowArr[i], colArr[j])
                column.push(new cell.cell(rowArr[i], colArr[j]))
            }
            cellArr.push(column)
        }
        return cellArr;
    }

    function configureCells(grid){
        grid.forEach(arr => {
            arr.forEach(cell => {
                var col = cell.column;
                var row = cell.row;
                console.log(col, row)
                cell.setNeighbours(arrAccessor(row-1,col),
                    arrAccessor(row + 1, col),
                    arrAccessor(row, col + 1),
                    arrAccessor(row, col - 1)
                )
            })
        })
    }

    function arrAccessor(row, column){
        if(row >= 0 && row < rows  && column >= 0 && column < columns ) {
        // if(row >= 0 && row < rows -1  && column >= 0 && column < gridInstance.grid[row].length - 1 ) {
            return gridInstance.grid[row][column]
        } else {
            return null;
        }
    }

    function randomCell() {
        var row = utils.getRandomInt(0, rows );
        var col = utils.getRandomInt(0, columns);
        return gridInstance.grid[row][col];
    }

    function drawCellAscii(){

        var output = '+' + '---+'.repeat(columns) + '\n';
        gridInstance.grid.forEach(row => {
            var top = '|';
            var bottom = '+';
            row.forEach(cell => {
                console.log(Object.keys(cell.links)[0])
                var neighbors = cell.getNeighbours();
                cell.neighbours = neighbors;
                var body = '   ';
                var eastBoundary;
                var southBoundary;
                if(neighbors.east && cell.isLinked(neighbors.east) == true) {
                    eastBoundary = ' ';
                } else {
                    eastBoundary = '|'
                }
                if(cell.neighbours.south && cell.isLinked(cell.neighbours.south)) {
                    southBoundary = '   ';
                } else{
                    southBoundary  = "---";
                }
                top += (body + eastBoundary);
                bottom += (southBoundary + '+');
            });
            output += (top + '\n');
            output += (bottom + '\n');
        });
        console.log(output);
        return output;

    }

    return Object.assign(this, {arrAccessor, randomCell, drawCellAscii});


    // console.log(this.grid);
    
}

module.exports = {Grid};