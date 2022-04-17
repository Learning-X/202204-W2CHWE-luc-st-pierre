/* eslint-disable import/extensions */
import Grid from "./canvasClass.js";
import Cell from "./cell.js";

const ctx = document.querySelector("#grid").getContext("2d");

const grid = new Grid(10);
const cell = new Cell(60);

grid.generateStateCells(cell);
grid.drawCellsOnCanvas(ctx, cell.cellSize);
