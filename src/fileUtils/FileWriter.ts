const fs = require('fs');

const DEFAULT_BACKGROUND = [0, 128, 128];
const DEFAULT_COLOR = [0, 255, 0];

export class FileWriter {
    path: string;
    width: number;
    height: number;
    viewMatrix: number[][][];

    constructor(width: number, height: number, pathToFile: string) {
        this.height = height;
        this.width = width;
        this.path = pathToFile;

        this.viewMatrix = [];

        for (let i = 0; i < height; i++) {
            this.viewMatrix.push([]);
        }
    }

    addColor(y: number, x: number, value: number): void {
        if (value < 0)
            this.viewMatrix[y][x] = DEFAULT_BACKGROUND;
        else
            this.viewMatrix[y][x] = [
                Math.round(DEFAULT_COLOR[0] * value),
                Math.round(DEFAULT_COLOR[1] * value),
                Math.round(DEFAULT_COLOR[2] * value)
            ];
    }

    write(): void {
        let result: string = `P3\n${this.width} ${this.height}\n255\n`;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                result += `${this.viewMatrix[y][x][0]} ${this.viewMatrix[y][x][1]} ${this.viewMatrix[y][x][2]}\n`;
            }
        }

        fs.writeFileSync(this.path, result);
    }
}
