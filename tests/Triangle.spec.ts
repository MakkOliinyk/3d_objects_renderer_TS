import { Triangle, TTriangle } from "../src/geometry/Triangle";
import { Point } from "../src/geometry/Point";
import { Vector } from "../src/geometry/Vector";
import { Ray } from "../src/geometry/Ray";

describe('Triangle', () => {
    let triangle: TTriangle = null;

    beforeEach(() => {
        triangle = new Triangle(new Point(-5, 0, 0), new Point(5, 0, 0), new Point(0, 10, 0));
    });

    it("has intersection with ray", () => {
        const ray = new Ray(new Point(0, 2, 2), new Vector(0, 0, -1).normalize());

        expect(triangle.intersection(ray)).not.toBeNull();
    });

    it("has intersection with ray in one of the vertices", () => {
        const ray = new Ray(new Point(-5, 0, 1), new Vector(0, 0, -1).normalize());

        expect(triangle.intersection(ray)).not.toBeNull();
    });

    it("doesn't have intersection with ray that is behind it", () => {
        const ray = new Ray(new Point(0, 2, -2), new Vector(0, 0, -1).normalize());

        expect(triangle.intersection(ray)).toBeNull();
    });

    it("doesn't have intersection with ray that is parallel to it", () => {
        const ray = new Ray(new Point(0, 2, 2), new Vector(0, 1, 0).normalize());

        expect(triangle.intersection(ray)).toBeNull();
    });
});
