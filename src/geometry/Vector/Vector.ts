export type TVector = {
    x: number;
    y: number;
    z: number;

    length: number;

    add(vector: TVector): TVector;
    subtract(vector: TVector): TVector;
    multiply(n: number): TVector;
    divide(vector: TVector): TVector;
    dot(vector: TVector): number;
    cross(vector: TVector): TVector;
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

    add(vector: TVector): TVector {
        return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    subtract(vector: TVector): TVector {
        return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    multiply(n: number): TVector {
        return new Vector(this.x * n, this.y * n, this.z * n);
    }

    divide(vector: TVector): TVector {
        return new Vector(this.x / vector.x, this.y / vector.y, this.z / vector.z);
    }

    dot(vector: TVector): number {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    cross(vector: TVector): TVector {
        return new Vector(
            this.y * vector.z - this.z * vector.y,
            this.z * vector.x - this.x * vector.z,
            this.x * vector.y - this.y * vector.x
        );
    }

    normalize(): TVector {
        if (this.length === 0) return new Vector(0, 0, 0);
        return new Vector(this.x / this.length, this.y / this.length, this.z / this.length);
    }
}
