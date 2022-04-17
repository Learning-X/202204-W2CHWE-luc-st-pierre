/* eslint-disable import/extensions */

import Cell from "./cell.js";

export default class Game {
  grid = [];
  rows;
  cols;
  cell;
  resolution;

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    // this.cell = new Cell(resolution);
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
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = new Cell(ctx, resolution, j, i);
      }
    }
    return this.grid;
  }

  gameInit(ctx, resolution) {
    this.generateStateCells(ctx, resolution);
  }
}
