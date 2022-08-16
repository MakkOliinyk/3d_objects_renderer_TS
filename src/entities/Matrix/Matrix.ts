const DEFAULT_MATRIX = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

export type TMatrix = {
    data: number[][];
};

export class Matrix implements TMatrix {
    data: number[][];

    constructor(data?: number[][]) {
        this.data = data || DEFAULT_MATRIX;
    }
}
