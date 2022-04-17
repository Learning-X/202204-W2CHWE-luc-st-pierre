export default class Cell {
  cellSize = 60;
  isAlive;

  constructor(cellSize) {
    this.cellSize = cellSize;
  }

  stateCells() {
    this.isAlive = Math.random() > 0.5 ? 1 : 0;
    return this.isAlive;
  }
}
