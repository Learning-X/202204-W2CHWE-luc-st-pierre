/* eslint-disable import/extensions */
import Game from "./canvasClass.js";

window.onload = () => {
  const ctx = document.querySelector("#grid").getContext("2d");
  const resolution = 20;
  const cols = ctx.canvas.width / resolution;
  const rows = ctx.canvas.height / resolution;

  return new Game(rows, cols, ctx, resolution);
};
