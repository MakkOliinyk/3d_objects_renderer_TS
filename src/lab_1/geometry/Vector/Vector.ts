export type TVector = {
    x: number;
    y: number;
    z: number;

    length: number;

    add(vector: TVector): TVector;
    subtract(vector: TVector): TVector;
    dot(vector: TVector): number;
    divide(vector: TVector): TVector;
    multiply(n: number): TVector;
    normalize(): TVector;
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

    add(vector: Vector): Vector {
        return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    subtract(vector: Vector): Vector {
        return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    dot(vector: Vector): number {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    divide(vector: Vector): Vector {
        return new Vector(this.x / vector.x, this.y / vector.y, this.z / vector.z);
    }

    multiply(n: number): Vector {
        return new Vector(this.x * n, this.y * n, this.z * n);
    }

    normalize(): TVector {
        if (this.length === 0) return new Vector(0, 0, 0);
        return new Vector(this.x / this.length, this.y / this.length, this.z / this.length);
    }
}