/* eslint-disable import/extensions */

import Cell from "./cell.js";

export default class Game {
  grid = [];
  nextGrid = [];
  rows;
  cols;
  cell;
  ctx;
  resolution;
  totalNeighbours;

  constructor(rows, cols, ctx, resolution) {
    this.rows = rows;
    this.cols = cols;
    this.ctx = ctx;
    this.resolution = resolution;
  }

  populateGrid(cols, rows, ctx, resolution) {
    for (let i = 0; i < rows; i++) {
      this.grid[i] = [];

      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = new Cell(ctx, resolution, i, j);
      }
    }
    this.nextGeneration(cols, rows, ctx, resolution);
    return this.grid;
  }

  update() {
    // Trying some test
    const test = this.nextGeneration();
    return test;
  }

  nextGeneration(cols, rows, ctx, resolution) {
    this.nextGrid = this.grid.map((arr) => [...arr]);

    for (let i = 0; i < rows; i++) {
      this.grid[i] = [];

      for (let j = 0; j < cols; j++) {
        const cell = new Cell(ctx, resolution, i, j);
        this.grid[i][j] = cell;

        this.totalNeighbours = 0;

        for (let l = -1; l < 2; l++) {
          for (let k = -1; k < 2; k++) {
            if (i === 0 && k === 0) {
              /* empty */
            }
            const cellX = i + l;
            const cellY = j + k;

            if (
              cellX >= 0 &&
              cellY >= 0 &&
              cellX < this.cols &&
              cellY < this.rows
            ) {
              const currentNeighbour = this.grid[i + l][j + k];

              this.totalNeighbours += currentNeighbour;
            }
          }
        }

        if (cell === 1 && this.totalNeighbours < 2) {
          this.nextGrid[i][j] = 0;
        } else if (cell === 1 && this.totalNeighbours > 3) {
          this.nextGrid[i][j] = 0;
        } else if (cell === 0 && this.totalNeighbours === 3) {
          this.nextGrid[i][j] = 1;
        }
      }
    }

    return this.nextGrid;
  }

  gameInit(rows, cols, ctx, resolution) {
    this.populateGrid(cols, rows, ctx, resolution);
  }
}
