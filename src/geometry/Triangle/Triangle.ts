import { TPoint } from "../Point";
import { TRay } from "../Ray";
import { TVector, Vector } from "../Vector";

export type TTriangle = {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    sa: TVector;
    sb: TVector;
    sc: TVector;

    intersection(ray: TRay): number;
    getPointNormal(point: TPoint): TVector;
}

export class Triangle {
    a: TPoint;
    b: TPoint;
    c: TPoint;

    sa: TVector;
    sb: TVector;
    sc: TVector;

    constructor(a: TPoint, b: TPoint, c: TPoint, sa?: TVector, sb?: TVector, sc?: TVector) {
        this.a = a;
        this.b = b;
        this.c = c;

        this.sa = sa || new Vector(0, 0, 0);
        this.sb = sb || new Vector(0, 0, 0);
        this.sc = sc || new Vector(0, 0, 0);
    }

    intersection = (ray: TRay): number => {
        const { origin, direction } = ray;

        const edge1 = this.b.subtract(this.a);
        const edge2 = this.c.subtract(this.a);

        const pvec = direction.cross(edge2);
        const determinant = edge1.dot(pvec);

        if (determinant === 0)
            return null;

        const inverted_determinant = 1 / determinant;

        const tvec = origin.subtract(this.a);
        const u = tvec.dot(pvec) * inverted_determinant;

        if (u < 0 || u > 1)
            return null;

        const qvec = tvec.cross(edge1);
        const v = direction.dot(qvec) * inverted_determinant;

        if (v < 0 || u + v > 1)
            return null;

        const t = edge2.dot(qvec) * inverted_determinant;

        return t >= 0
            ? t
            : null;
    }

    getPointNormal(point: TPoint): TVector {
        if (!this.sa.length && !this.sb.length && !this.sc.length) {
            const edge1 = this.b.subtract(point);
            const edge2 = this.c.subtract(point);

            return edge1.cross(edge2).normalize();
        }

        let lengthA: number = this.a.subtract(point).length;
        let lengthB: number = this.b.subtract(point).length;
        let lengthC: number = this.c.subtract(point).length;

        const lengths_sum: number = lengthA + lengthB + lengthC;

        lengthA = lengthA / lengths_sum;
        lengthB = lengthB / lengths_sum;
        lengthC = lengthC / lengths_sum;

        const a = this.sa.multiply(lengthA)
        const b = this.sb.multiply(lengthB)
        const c = this.sc.multiply(lengthC)

        return (a.add(b)).add(c).normalize();
    }
}
