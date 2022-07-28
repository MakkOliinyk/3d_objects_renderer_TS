import { Vector, TVector } from "../Vector";

export type TPoint = {
    x: number;
    y: number;
    z: number;

    add(other: TPoint): TPoint;
    subtract(other: TPoint): TVector;
}

export class Point implements TPoint {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(other): TPoint {
        return new Point(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    subtract(point): TVector {
        return new Vector(this.x - point.x, this.y - point.y, this.z - point.z);
    }
}
