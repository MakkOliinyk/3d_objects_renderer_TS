import { TPoint } from "../Point";
import { TVector } from "lab_1/geometry/Vector";

export type TPlane = {
    normal: TVector;
    center: TPoint;
}

export class Plane implements TPlane {
    normal: TVector;
    center: TPoint;

    constructor(normal: TVector, center: TPoint) {
        this.normal = normal;
        this.center = center;
    }
}

