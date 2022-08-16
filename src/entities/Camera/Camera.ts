import { TPoint } from "../../geometry/Point";

export type TCamera = {
    location: TPoint;
}

export class Camera {
    location: TPoint;

    constructor(location: TPoint) {
        this.location = location;
    }
}
