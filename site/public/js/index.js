/* eslint-disable import/extensions */
import Grid from "./canvasClass.js";
import Cell from "./cell.js";

const ctx = document.querySelector("#grid").getContext("2d");
const resolution = 20;

const cols = ctx.canvas.width / resolution;
const rows = ctx.canvas.width / resolution;

const grid = new Grid(cols, rows);
const cell = new Cell(resolution);

grid.generateStateCells(cell);
grid.drawCellsOnCanvas(ctx, cell.cellSize);
