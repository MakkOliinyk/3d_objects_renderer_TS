import { Sphere } from '../src/lab_1/geometry/Sphere';
import { Point } from "../src/lab_1/geometry/Point";
import { Ray } from "../src/lab_1/geometry/Ray";
import { Vector } from "../src/lab_1/geometry/Vector";

describe('Sphere', () => {
    it('intersects with ray in front', function () {
        const sphere = new Sphere(new Point(0, 0, 0), 10);
        const ray = new Ray(new Point(0, 0, 20), new Vector(0, 0, -1));
        const t = sphere.intersection(ray);
        expect(t).toBe(10);
    });

    it('fails to intersect', function () {
        const sphere = new Sphere(new Point(0, 0, 0), 1);
        const ray = new Ray(new Point(0, 0, 5), new Vector(0, 1, 0));
        const t = sphere.intersection(ray);
        expect(t).toBeNull();
    });
});
