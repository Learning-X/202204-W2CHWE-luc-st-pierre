export default class Cell {
  isAlive;
  resolution;

  constructor(ctx, resolution, i, j) {
    this.isAlive = Math.random() > 0.5 ? 1 : 0;
    this.resolution = resolution;
    this.ctx = ctx;
    this.x = i;
    this.y = j;
  }

  drawCells() {
    if (this.ctx) {
      this.ctx.strokeRect(
        this.x * this.resolution,
        this.y * this.resolution,
        this.resolution,
        this.resolution
      );

      this.ctx.fillRect(
        this.x * this.resolution,
        this.y * this.resolution,
        this.resolution,
        this.resolution
      );

      if (this.isAlive) {
        this.ctx.fillStyle = "black";
      } else {
        this.ctx.fillStyle = "white";
      }
    }
  }
}
