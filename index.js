// - live cell with fewer than 2 live neighbors dies
// - live cell with two or 3 live neighbors lives on next generation
// - live cell with more than 3 live neighbors dies
// - dead cell with exactly 3 live neighbors becomes a live cell

const gridGenerator = () => {
  const rowsCells = 10;
  const columnsCells = 10;
  const multiDimentionalArray = [];

  for (let i = 0; i < rowsCells; i++) {
    multiDimentionalArray[i] = [];

    for (let j = 0; j < columnsCells; j++) {
      multiDimentionalArray[i][j] = 0;
    }
  }
  return multiDimentionalArray;
};

console.table(gridGenerator());
