/* eslint-disable import/extensions */
import Game from "./canvasClass.js";
import Cell from "./cell.js";

const ctx = document.querySelector("#grid").getContext("2d");
const resolution = 20;

const cols = ctx.canvas.width / resolution;
const rows = ctx.canvas.width / resolution;

window.onload = () => {
  const game = new Game(cols, rows, resolution);
  const cell = new Cell(resolution);
  game.gameInit(cell, ctx, cell.cellSize);
};
