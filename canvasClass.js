// - live cell with fewer than 2 live neighbors dies
// - live cell with two or 3 live neighbors lives on next generation
// - live cell with more than 3 live neighbors dies
// - dead cell with exactly 3 live neighbors becomes a live cell

export default class Grid {
  rowsCells = 10;
  columnsCells = 10;
  multiDimentionalArray = [];

  gridGenerator() {
    for (let i = 0; i < this.rowsCells; i++) {
      this.multiDimentionalArray[i] = [];

      for (let j = 0; j < this.columnsCells; j++) {
        this.multiDimentionalArray[i][j] = 0;
      }
    }
    return this.multiDimentionalArray;
  }
}
