import { populateGrid, Game } from "../../public/js/canvasClass";

describe("Given a populateGrid function", () => {
  describe("When it receives 20, 20, CanvasRenderingContext2D, 10", () => {
    test("Then it should return", () => {
      const rows = 20;
      const cols = 20;
      const ctx = "";
      const resolution = 20;
      const game = new Game(rows, cols, ctx, resolution);
      const expectedResult = {};
      const result = game.gameInit(rows, cols, ctx, resolution);

      expect(result).toBe(expectedResult);
    });
  });
});
