import { Camera } from "../Camera";
import { ViewMatrix } from "../ViewMatrix";
import { Light } from "../Light";

export class View {
    camera: Camera;
    matrix: ViewMatrix;
    light: Light;

    constructor(camera: Camera, light: Light, matrix: ViewMatrix) {
        this.camera = camera;
        this.matrix = matrix;
        this.light = light;
    };

    private getChar = (x): string => {
        if (x < 0) return ' ';
        else if (x < 0.2) return '.';
        else if (x < 0.5) return '*';
        else if (x < 0.8) return '0';
        else return '#';
    }
}
