import { Point } from "./geometry/Point";
import { Plane } from "./geometry/Plane";
import { Vector } from "./geometry/Vector";

import { Light } from "./entities/Light";
import { View } from "./entities/View";
import { Camera } from "./entities/Camera";
import { ViewMatrix } from "./entities/ViewMatrix";

const camera = new Camera(new Point(0, 0, 50));
const light = new Light(new Vector(1, 1, 1).normalize());
const matrix = new ViewMatrix(20, 20, 30);
const view: View = new View(camera, light, matrix);

const plane = new Plane(new Vector(1, 1, 0.3).normalize(), new Point(0, 0, 0));

view.inject(plane);
view.digest();
console.log(view.image);

view.clear();
