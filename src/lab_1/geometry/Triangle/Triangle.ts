import { TPoint } from "../Point";
import { TRay } from "../Ray";
import { TVector } from "../Vector";

export type TTrinagle = {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    intersection(ray: TRay): number;
    getPointNormal(_point: TPoint): TVector;
}

export class Triangle {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    constructor(a: TPoint, b: TPoint, c: TPoint) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // formula: https://bit.ly/3oAFbwW
    intersection(ray: TRay): TPoint {
        const e1 = this.b.subtract(this.a);
        const e2 = this.c.subtract(this.a);
        const p = ray.direction.cross(e2);
        const a = e1.dot(p);
        if (a < 0) return null;
        const f = ray.origin.subtract(this.a);
        const b = f.dot(p);
        if (b < 0 || b > a) return null;
        const d = e1.cross(f).dot(ray.direction);
        if (d < 0 || d > a) return null;
        const t = e2.dot(p) / a;
        return ray.at(t);
    }

    getPointNormal(_point: TPoint): TPoint {
        const e1 = this.b.subtract(this.a);
        const e2 = this.c.subtract(this.a);

        return e1.cross(e2).normalize();
    }
}
