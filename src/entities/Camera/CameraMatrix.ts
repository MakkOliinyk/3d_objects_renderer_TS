import { Point, TPoint } from "../../geometry/Point";
import { Ray } from "../../geometry/Ray";

import { Camera } from "./index";

export class CameraMatrix extends Camera {
    width: number;
    height: number;
    private matrix: TPoint[][];

    constructor(width, height, depth, location) {
        super(location);

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

    getPoint(x: number, y: number): TPoint {
        const point = this.getValue(x, y);

        return new Point(
            -this.width / 2 + point.x,
            this.height / 2 - point.y,
            point.z
        );
    }

    getRays() {
        const rays = [];

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const ray = new Ray(this.location, this.getPoint(x, y).subtract(this.location).normalize());
                rays.push({ ray, pos: { x, y } });
            }
        }

        return rays;
    }
}
