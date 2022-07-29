import { TPoint } from "../Point";
import { TVector } from "../Vector";

export type TSphere = {
    center: TPoint;
    radius: number;

    getPointNormal(point: TPoint): TVector;
}

export class Sphere implements TSphere {
    center: TPoint;
    radius: number;

    constructor(center: TPoint, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    getPointNormal(point: TPoint): TVector {
        return point.subtract(this.center).normalize();
    }
}

