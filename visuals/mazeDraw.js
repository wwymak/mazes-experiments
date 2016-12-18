let mazeJson = 'binaryTree2.json';
let canvasWidth = 600;
let canvasHeight = 600;
d3.json(mazeJson, (err, data) => {

    let canvas = d3.select("#maze").attr("width", canvasWidth).attr("height", canvasHeight);
    let context = canvas.node().getContext("2d");
    let mazeCellWidth = Math.round(0.8 * canvasWidth / Object.keys(data).length);
    let mazeCellHeight = Math.round(0.8 * canvasHeight / d3.max(Object.keys(data).map(row => Object.keys(data[row]).length)));
    let walls = [];
    let allWalls = [];
    let linkCount = 0
    let xOffset = 0.05 * canvasWidth;
    let yOffset = 0.05 * canvasHeight;
    let rowNumbers = Object.keys(data);
    //method 1
    // rowNumbers.forEach(rowNumber => {
    //     let row = data[rowNumber];
    //     let cellkeys = Object.keys(row);
    //     cellkeys.forEach(key => {
    //         let cell = row[key];
    //         let links = cell.links;
    //         context.save();
    //         context.translate(xOffset + parseInt(key) * mazeCellWidth, yOffset + parseInt(rowNumber) * mazeCellHeight);
    //
    //         if(links.indexOf('north') < 0) {
    //             context.beginPath();
    //             context.moveTo(0, 0);
    //             context.lineTo(mazeCellWidth, 0);
    //             context.stroke();
    //         }
    //         if(links.indexOf('east') < 0) {
    //             context.beginPath();
    //             context.moveTo(mazeCellWidth, 0);
    //             context.lineTo(mazeCellWidth, mazeCellHeight);
    //             context.stroke();
    //         }
    //         if(links.indexOf('south') < 0) {
    //             context.beginPath();
    //             context.moveTo(0, mazeCellHeight);
    //             context.lineTo(mazeCellWidth, mazeCellHeight);
    //             context.stroke();
    //         }
    //         if(links.indexOf('west') < 0) {
    //             context.beginPath();
    //             context.moveTo(0, 0);
    //             context.lineTo(0, mazeCellHeight);
    //             context.stroke();
    //         }
    //         context.stroke();
    //
    //         context.restore();
    //
    //     })
    // });
    //method 2
    rowNumbers.forEach(rowNumber => {
        let row = data[rowNumber];
        let cellkeys = Object.keys(row);
        cellkeys.forEach(key => {
            let cell = row[key];
            let links = cell.links;

            let startX = xOffset + parseInt(key) * mazeCellWidth;
            let startY = yOffset + parseInt(rowNumber) * mazeCellHeight;

            if(links.indexOf('north') < 0) {
                let wallLine = {
                    x0: startX,
                    x1: startX + mazeCellWidth,
                    y0: startY,
                    y1: startY
                };
                allWalls.push(wallLine);

            }
            if(links.indexOf('east') < 0) {
                let wallLine = {
                    x0: startX + mazeCellWidth,
                    x1: startX + mazeCellWidth,
                    y0: startY,
                    y1: startY + mazeCellHeight
                };

                allWalls.push(wallLine);

            }
            if(links.indexOf('south') < 0) {
                let wallLine = {
                    x0: startX,
                    x1: startX + mazeCellWidth,
                    y0: startY + mazeCellHeight,
                    y1: startY + mazeCellHeight
                };
                allWalls.push(wallLine);

            }
            if(links.indexOf('west') < 0) {
                let wallLine = {
                    x0: startX,
                    x1: startX,
                    y0: startY,
                    y1: startY + mazeCellHeight
                };

                allWalls.push(wallLine);

            }

        })
    });

    walls = _.uniqWith(allWalls,  _.isEqual );

    console.log(walls, allWalls);
    drawMaze(walls, context);

});

function drawMaze(wallsArr, ctx) {
    wallsArr.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(d.x0, d.y0);
        ctx.lineTo(d.x1, d.y1);
        ctx.stroke();
    })
}