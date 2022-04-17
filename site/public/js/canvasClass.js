/* eslint-disable import/extensions */

import Cell from "./cell.js";

export default class Game {
  grid = [];
  rows;
  cols;
  cell;
  ctx;
  resolution;

  constructor(rows, cols, ctx, resolution) {
    this.rows = rows;
    this.cols = cols;

    this.populateGrid(cols, rows, ctx, resolution);
  }

  populateGrid(cols, rows, ctx, resolution) {
    for (let i = 0; i < rows; i++) {
      this.grid[i] = [];

      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = new Cell(ctx, resolution, j, i);
      }
    }
    return this.grid;
  }
}
