import { Plane } from '../src/lab_1/geometry/Plane';
import { Vector } from "../src/lab_1/geometry/Vector";
import { Point } from "../src/lab_1/geometry/Point";
import { Ray } from "../src/lab_1/geometry/Ray";

describe('Plane', () => {
    let plane = null;

    beforeEach(() => {
        plane = new Plane(new Vector(0, 0, 1), new Point(0, 0, 0));
    });

    it("intersects with ray that is the front", () => {
        const ray: Ray = new Ray(new Point(0, 0, -1), new Vector(0, 0, 1));
        expect(plane.intersection(ray)).not.toBeNull();
    });

    it("doesn't intersect with parallel ray", () => {
        const ray: Ray = new Ray(new Point(0, 0, 1), new Vector(0, 1, 0));
        expect(plane.intersection(ray)).toBeNull();
    });

    it("doesn't intersect with ray that is behind", () => {
        const ray: Ray = new Ray(new Point(0, 0, 1), new Vector(0, 1, 0));
        expect(plane.intersection(ray)).toBeNull();
    });
});
