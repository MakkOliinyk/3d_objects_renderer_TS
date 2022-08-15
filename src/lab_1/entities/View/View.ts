import { Camera } from "../Camera";
import { ViewMatrix } from "../ViewMatrix";
import { Light } from "../Light";

import { TPoint } from "../../geometry/Point";
import { Ray } from "../../geometry/Ray";
import { TVector } from "lab_1/geometry/Vector";

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

    getCharacter (normal: TVector) {
        const dotResult: number = this.light.direction.dot(normal);

        if (dotResult < 0) return ' ';
        else if (dotResult < 0.2) return '.';
        else if (dotResult < 0.5) return '*';
        else if (dotResult < 0.8) return '0';
        else return '#';
    }

    process() {
        this.image = '';
        const origin: TPoint = this.camera.location;

        let resultImage: string = '';

        for (let y = 0; y < this.matrix.height; y++) {
            for (let x = 0; x < this.matrix.width; x++) {
                const direction = this.matrix.getPoint(x, y).subtract(origin);
                const ray = new Ray(origin, direction);

                let closestFigure: any = null;
                let closestDistance: number = Infinity;

                for (let figure of this.figures) {
                    const distance: number = figure.intersection(ray);

                    if (distance !== null && distance < closestDistance) {
                        closestDistance = distance;
                        closestFigure = figure;
                    }
                }

                if (closestFigure === null) resultImage += '-'
                else {
                    const pointNormal = closestFigure.getPointNormal(ray.at(closestDistance));
                    resultImage += this.getCharacter(pointNormal);
                }

                resultImage += ' ';
            }
            resultImage += '\n';
        }

        this.image = resultImage;
    }
}
