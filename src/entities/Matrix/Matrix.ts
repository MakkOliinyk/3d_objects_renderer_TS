import { TVector, Vector } from "../../geometry/Vector";
import { Point, TPoint } from "../../geometry/Point";

const DEFAULT_MATRIX = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

const getRotationRad = (angle: number): number => {
    return angle * (Math.PI / 180);
};

export type TMatrix = {
    data: number[][];
};

export class Matrix implements TMatrix {
    data: number[][];

    private multiplyEntity(entity: TVector | TPoint): number[] {
        const result = [0, 0, 0];
        const entity_in_array_dimension = [entity.x, entity.y, entity.z];

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < entity_in_array_dimension.length; j++) {
                result[i] += this.data[i][j] * entity_in_array_dimension[j];
            }
        }

        return result;
    }

    constructor(data?: number[][]) {
        this.data = data || DEFAULT_MATRIX;
    }

    multiply(matrix: Matrix): Matrix {
        const result = new Matrix();

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let sum = 0;

                for (let k = 0; k < 4; k++) {
                    sum += this.data[i][k] * matrix.data[k][j];
                }

                result.data[i][j] = sum;
            }
        }

        this.data = result.data;

        return this;
    }

    multiplyVector(vector: TVector): TVector {
        const result = this.multiplyEntity(vector);

        return new Vector(result[0], result[1], result[2]);
    }

    multiplyPoint(point: TPoint): TPoint {
        const result = this.multiplyEntity(point);

        return new Point(result[0], result[1], result[2]);
    }

    rotateX(angle: number): void {
        const rad = getRotationRad(angle);

        this.multiply(
            new Matrix([
                [0, 0, 0, 0],
                [0, Math.cos(rad), -Math.sin(rad), 0],
                [0, Math.sin(rad), Math.cos(rad), 0],
            ])
        );
    }

    rotateY(angle: number): void {
        const rad = getRotationRad(angle);

        this.multiply(
            new Matrix([
                [Math.cos(rad), 0, Math.sin(rad), 0],
                [0, 0, 0, 0],
                [-Math.sin(rad), 0, Math.cos(rad), 0],
            ])
        );
    }

    rotateZ(angle: number): void {
        const rad = getRotationRad(angle);

        this.multiply(
            new Matrix([
                [Math.cos(rad), -Math.sin(rad), 0, 0],
                [Math.sin(rad), Math.cos(rad), 0, 0],
                [0, 0, 0, 0],
            ])
        );
    }

    rotate(angleX: number, angleY: number, angleZ: number): void {
        if (angleX) this.rotateX(angleX);
        if (angleY) this.rotateY(angleY);
        if (angleZ) this.rotateZ(angleZ);
    }

    scale(scaleValue: number): void {
        this.multiply(
            new Matrix([
                [scaleValue, 0, 0, 0],
                [0, scaleValue, 0, 0],
                [0, 0, scaleValue, 0],
            ])
        );
    }

    move(x: number, y: number, z: number): void {
        this.multiply(
            new Matrix([
                [0, 0, 0, x],
                [0, 0, 0, y],
                [0, 0, 0, z],
            ])
        );
    }
}
