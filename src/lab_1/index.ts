import { Point } from "./geometry/Point";
import { Vector } from "./geometry/Vector";
import { Plane } from "./geometry/Plane";
import { Sphere } from "./geometry/Sphere";

import { Light } from "./entities/Light";
import { View } from "./entities/View";
import { Camera } from "./entities/Camera";
import { ViewMatrix } from "./entities/ViewMatrix";

const camera = new Camera(new Point(0, 0, 50));
const light = new Light(new Vector(1, 1, 1).normalize());
const matrix = new ViewMatrix(20, 20, 30);
const view: View = new View(camera, light, matrix);

const plane = new Plane(new Vector(1, 1, -0.3).normalize(), new Point(0, 0, 0));
const sphere = new Sphere(new Point(0, 0, 0), 16);

view.inject(plane);
view.process();
console.log(view.image);

view.clear();

view.inject(plane);
view.inject(sphere);
view.process();
console.log(view.image);

view.clear();

view.inject(sphere);
view.process();
console.log(view.image);

view.clear();

const sphere_behind: Sphere = new Sphere(new Point(-10,10,-5), 16);
const sphere_infront: Sphere = new Sphere(new Point(0,0,5), 16);

view.inject(sphere_behind);
view.inject(sphere_infront);
view.process();
console.log(view.image);
