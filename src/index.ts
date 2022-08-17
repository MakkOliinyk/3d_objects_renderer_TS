import { Point } from "./geometry/Point";
import { Vector } from "./geometry/Vector";
import { Triangle } from "./geometry/Triangle";

import { Light } from "./entities/Light";
import { CameraMatrix } from "./entities/Camera";
import { View } from "./entities/View";
import { Matrix } from "./entities/Matrix";

import { commandHandler } from "./fileUtils";
import { FileReader } from "./fileUtils";
import { FileWriter } from "./fileUtils";

const WIDTH = 680;
const HEIGHT = 480;

const SCREEN_OFFSET = 1200;
const CAMERA_POS = WIDTH + SCREEN_OFFSET;

const { input, output } = commandHandler();

const camera = new CameraMatrix(WIDTH, HEIGHT, 500, new Point(0, 0, CAMERA_POS));
const light = new Light(new Vector(1, 1, 1).normalize());
const out = new FileWriter(camera.width, camera.height, output);

const view = new View(camera, light, out);

const fileReader = new FileReader(input);
const lists = fileReader.read();

const matrix = new Matrix();

// matrix.move(0, -350, 0);
// matrix.rotate(10, 325, 0);
// matrix.scale(400);

// humanoid above
// matrix.move(0, -50, 0);
// matrix.rotate(0, 350, 0);
// matrix.scale(30);

// SHREK!
matrix.move(0, -50, 0);
matrix.rotate(30, 30, 0);
matrix.scale(3);

const triangles: Triangle[] = matrix.getTriangles(lists[0], lists[1], lists[2]);

triangles.forEach(triangle => view.inject(triangle));

view.process();
