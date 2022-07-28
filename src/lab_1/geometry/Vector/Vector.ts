export type TVector = {
    x: number;
    y: number;
    z: number;

    length: number;
}

export class Vector implements TVector {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get length(): number {
        return Math.sqrt(
            this.x * this.x
            + this.y * this.y
            + this.z * this.z
        );
    }
}
