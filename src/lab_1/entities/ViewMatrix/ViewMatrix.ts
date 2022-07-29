import { Point, TPoint } from "../../geometry/Point";

export class ViewMatrix {
    width: number;
    height: number;
    private matrix: TPoint[][];

    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.matrix = [];

        for (let i = 0; i < width; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < height; j++) {
                this.matrix[i][j] = new Point(i, j, depth);
            }
        }
    }

    getValue(x: number, y: number): TPoint {
        return this.matrix[x][y];
    }
}
