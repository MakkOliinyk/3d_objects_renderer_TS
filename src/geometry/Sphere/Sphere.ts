import { TPoint } from "../Point";
import { TRay } from "../Ray";
import { TVector } from "../Vector";

export type TSphere = {
    center: TPoint;
    radius: number;

    intersection(ray: TRay): number;
    getPointNormal(point: TPoint): TVector;
}

export class Sphere implements TSphere {
    center: TPoint;
    radius: number;

    constructor(center: TPoint, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    // formula: https://bit.ly/2IK3kLr
    intersection(ray: TRay): number {
        const oc = ray.origin.subtract(this.center);
        const a = ray.direction.dot(ray.direction);
        const b = oc.dot(ray.direction);
        const c = oc.dot(oc) - this.radius * this.radius;
        const discriminant = b * b - a * c;

        if (discriminant < 0) return null;

        return (-b - Math.sqrt(discriminant)) / a;
    }

    getPointNormal(point: TPoint): TVector {
        return point.subtract(this.center).normalize();
    }
}

