/* eslint-disable import/extensions */

export default class Game {
  grid = [];
  rows;
  cols;

  constructor(rows, cols) {
    this.cols = cols;
    this.rows = rows;
    this.populateGrid(cols, rows);
  }

  populateGrid(cols, rows) {
    for (let i = 0; i < rows; i++) {
      this.grid[i] = [];

      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = [];
      }
    }
  }

  generateStateCells(cell) {
    const gridCell = this.grid;

    for (let i = 0; i < gridCell.length; i++) {
      for (let j = 0; j < gridCell[i].length; j++) {
        gridCell[i][j] = cell.stateCells();
      }
    }
    return gridCell;
  }

  drawCellsOnCanvas(ctx, cellSize) {
    const { grid } = this;

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

  gameInit(cell, ctx, cellSize) {
    this.generateStateCells(cell);
    this.drawCellsOnCanvas(ctx, cellSize);
  }
}
