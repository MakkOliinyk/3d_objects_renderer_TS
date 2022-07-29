import { Camera } from "../Camera";
import { ViewMatrix } from "../ViewMatrix";
import { Light } from "../Light";

export class View {
    camera: Camera;
    matrix: ViewMatrix;
    light: Light;
    figures: any[];
    image: string;

    constructor(camera: Camera, light: Light, matrix: ViewMatrix) {
        this.camera = camera;
        this.matrix = matrix;
        this.light = light;
        this.figures = [];
        this.image = '';
    };

    clear() {
        this.figures = [];
    }

    inject(figure: any) {
        this.figures.push(figure);
    }
}
