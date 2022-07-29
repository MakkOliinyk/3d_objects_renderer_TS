import { TPoint } from "../Point";

export type TTrinagle = {
    a: TPoint;
    b: TPoint;
    c: TPoint;
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
}
