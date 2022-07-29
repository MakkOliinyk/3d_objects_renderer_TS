import { TVector } from "../../geometry/Vector";

export type TLight = {
    direction: TVector;
}

export class Light {
    direction: TVector

    constructor(direction: TVector) {
        this.direction = direction;
    }
}
