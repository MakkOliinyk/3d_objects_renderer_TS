import { CameraMatrix } from "../../entities/Camera";
import { TVector } from "../../geometry/Vector";
import { Ray, TRay } from "../../geometry/Ray";

import { Light } from "../Light";

import { FileWriter } from "../../fileUtils";

export class View {
    private camera: CameraMatrix;
    private light: Light;

    output: FileWriter;
    figures: any[];

    constructor(camera: CameraMatrix, light: Light, output) {
        this.camera = camera;
        this.light = light;
        this.output = output;

        this.figures = [];
    }

    inject(figure: any) {
        this.figures.push(figure);
    }

    getLighting(pointNormal: TVector): number {
        const dotResult = this.light.direction.dot(pointNormal);

        if (dotResult < 0) return 0;
        else return dotResult;
    }


    isShaded = (item, ray: TRay): Boolean => {
        for (let i = 0; i < this.figures.length; i++) {
            if (this.figures[i] !== item) {
                const t = this.figures[i].intersection(ray);

                if (t > 0) return true;
            }
        }

        return false;
    }

    process(): void {
        const rays = this.camera.getRays();

        rays.map((element) => {
            let figure = null;
            let t = Infinity;

            for (let i = 0; i < this.figures.length; i++) {
                const _figure = this.figures[i];
                const _t = _figure.intersection(element.ray);

                if (_t !== null && _t < t){
                    t = _t;
                    figure = _figure;
                }
            }

            if (figure === null)
                this.output.addColor(element.pos.y, element.pos.x, -1);
            else {
                const intersectionPoint = element.ray.at(t);
                const shading = this.isShaded(figure, new Ray(intersectionPoint, this.light.direction));

                if (shading)
                    this.output.addColor(element.pos.y, element.pos.x, 0);
                else {
                    const pointNormal = figure.getPointNormal(intersectionPoint);
                    const lighting = this.getLighting(pointNormal);

                    this.output.addColor(element.pos.y, element.pos.x, lighting);
                }
            }
        })

        this.output.write();
    }
}
