import { TPoint } from "../Point";
import { TVector } from "../Vector";

export type TRay = {
    origin: TPoint;
    direction: TVector;

    at(t: number): TPoint;
}

export class Ray implements TRay {
    origin: TPoint;
    direction: TVector;

    constructor(origin: TPoint, direction: TVector) {
        this.origin = origin;
        this.direction = direction;
    }

    at(t: number): TPoint {
        return this.origin.add(this.direction.multiply(t));
    }
}

