import { TPoint } from "../Point";
import { TVector } from "../Vector";
import { TRay } from "../Ray";

const EPS = 0.00001;

export type TPlane = {
    normal: TVector;
    center: TPoint;

    intersection(ray: TRay): number;
}

export class Plane implements TPlane {
    normal: TVector;
    center: TPoint;

    constructor(normal: TVector, center: TPoint) {
        this.normal = normal;
        this.center = center;
    }

    // formula: https://bit.ly/2oTe4yj
    intersection(ray: TRay): number {
        const d = this.normal.dot(ray.direction);

        if (Math.abs(d) > EPS) {
            const originCenterNormal: TVector = this.center.subtract(ray.origin).normalize();
            const t = originCenterNormal.dot(this.normal) / d;

            if (t >= 0) return t;
        }

        return null;
    }
}

