/* eslint-disable import/extensions */

import Cell from "./cell.js";

export default class Game {
  grid = [];
  rows;
  cols;
  cell;
  resolution;

  constructor(rows, cols, resolution) {
    this.rows = rows;
    this.cols = cols;
    this.cell = new Cell(resolution);
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

  generateStateCells(ctx, resolution) {
    const gridCell = this.grid;

    for (let i = 0; i < gridCell.length; i++) {
      for (let j = 0; j < gridCell[i].length; j++) {
        const cell = new Cell(ctx, resolution, j, i);
        gridCell[i][j] = cell.drawCells();
      }
    }

    this.grid = gridCell;
    return this.grid;
  }

  gameInit(ctx, resolution) {
    this.generateStateCells(ctx, resolution);
  }
}
