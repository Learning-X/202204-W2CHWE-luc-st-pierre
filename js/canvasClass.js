// - live cell with fewer than 2 live neighbors dies
// - live cell with two or 3 live neighbors lives on next generation
// - live cell with more than 3 live neighbors dies
// - dead cell with exactly 3 live neighbors becomes a live cell

export default class Grid {
  count;
  rowsCells;
  columnsCells;
  cellSize = 60;
  multiDimentionalArray = [];

  constructor(count) {
    this.rowsCells = count;
    this.columnsCells = count;
    this.gridGenerator();
  }

  gridGenerator() {
    for (let i = 0; i < this.rowsCells; i++) {
      this.multiDimentionalArray[i] = [];

      for (let j = 0; j < this.columnsCells; j++) {
        this.multiDimentionalArray[i][j] = [];
      }
    }
    return this.multiDimentionalArray;
  }

  generateStateCells() {
    const gridCell = this.multiDimentionalArray;

    for (let i = 0; i < gridCell.length; i++) {
      for (let j = 0; j < gridCell[i].length; j++) {
        gridCell[i][j] = Math.random() > 0.5 ? 1 : 0;
      }
    }
  }

  drawCellsOnCanvas(ctx) {
    const grid = this.multiDimentionalArray;

    if (ctx) {
      grid.forEach((row, x) => {
        row.forEach((cell, y) => {
          ctx.strokeRect(
            x * this.cellSize,
            y * this.cellSize,
            this.cellSize,
            this.cellSize
          );

          ctx.fillRect(
            x * this.cellSize,
            y * this.cellSize,
            this.cellSize,
            this.cellSize
          );

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
