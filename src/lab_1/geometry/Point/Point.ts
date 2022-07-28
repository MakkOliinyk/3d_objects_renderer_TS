export type TPoint = {
    x: number;
    y: number;
    z: number;
}

export class Point implements TPoint {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
