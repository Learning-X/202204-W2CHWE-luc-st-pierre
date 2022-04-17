/* eslint-disable import/extensions */
import Grid from "./canvasClass.js";

const ctx = document.querySelector("#grid").getContext("2d");

const grid = new Grid(10);
grid.generateStateCells();
grid.drawCellsOnCanvas(ctx);
