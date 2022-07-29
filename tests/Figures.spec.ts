import { TVector, Vector } from "../src/lab_1/geometry/Vector";
import { Sphere } from "../src/lab_1/geometry/Sphere";
import { Point } from "../src/lab_1/geometry/Point";
import { Ray } from "../src/lab_1/geometry/Ray";

describe('Figures', () => {
    let normal: TVector = null;

    beforeEach(() => {
        normal = new Vector(0,0,-1).normalize();
    });

    it("intersection with both figures but different distance", () => {
        const sphere_behind = new Sphere(new Point(0, 0, -5), 16);
        const sphere_infront = new Sphere(new Point(0, 0, 5), 16);

        const ray = new Ray(new Point(0, 0, 32), normal);

        const t_behind = sphere_behind.intersection(ray);
        const t_infront = sphere_infront.intersection(ray);

        expect(t_infront < t_behind);
    });
});
