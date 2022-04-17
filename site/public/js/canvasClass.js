/* eslint-disable import/extensions */

export default class Grid {
  multiDimentionalArray = [];
  rows;
  cols;
  count;

  constructor(count) {
    this.rows = count;
    this.cols = count;
    this.gridGenerator();
  }

  gridGenerator() {
    for (let i = 0; i < this.rows; i++) {
      this.multiDimentionalArray[i] = [];

      for (let j = 0; j < this.cols; j++) {
        this.multiDimentionalArray[i][j] = [];
      }
    }
    return this.multiDimentionalArray;
  }

  generateStateCells(cell) {
    const gridCell = this.multiDimentionalArray;

    for (let i = 0; i < gridCell.length; i++) {
      for (let j = 0; j < gridCell[i].length; j++) {
        gridCell[i][j] = cell.stateCells();
      }
    }
    return gridCell;
  }

  drawCellsOnCanvas(ctx, cellSize) {
    const grid = this.multiDimentionalArray;

    if (ctx) {
      grid.forEach((row, x) => {
        row.forEach((cell, y) => {
          ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);

          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

          if (cell) {
            ctx.fillStyle = "black";
          } else {
            ctx.fillStyle = "white";
          }
        });
      });
    }
  }
}
