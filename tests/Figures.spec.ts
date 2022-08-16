import { TVector, Vector } from "../src/geometry/Vector";
import { Sphere } from "../src/geometry/Sphere";
import { Point } from "../src/geometry/Point";
import { Ray } from "../src/geometry/Ray";

describe('Figures', () => {
    let normal: TVector = null;

    beforeEach(() => {
        normal = new Vector(0, 0, -1).normalize();
    });

    it("intersection with both figures but different distance", () => {
        const sphere_behind = new Sphere(new Point(0, 0, -5), 10);
        const sphere_infront = new Sphere(new Point(0, 0, 5), 10);

        const ray = new Ray(new Point(0, 0, 30), normal);

        const t_behind = sphere_behind.intersection(ray);
        const t_infront = sphere_infront.intersection(ray);

        expect(t_infront < t_behind);
    });

    it('intersection on edges', () => {
        const sphere: Sphere = new Sphere(new Point(-10, 0, -5), 10);
        const otherSphere: Sphere = new Sphere(new Point(10, 0, 5), 10);

        const ray: Ray = new Ray(new Point(0, 0, 30), new Vector(0, 0, -1).normalize());

        const t1 = sphere.intersection(ray);
        const t2 = otherSphere.intersection(ray);

        expect(t2).not.toBeNull();
        expect(t1).not.toBeNull();
    });

    it('no intersection', () => {
        const sphere: Sphere = new Sphere(new Point(-10, 0, -5), 5);
        const otherSphere: Sphere = new Sphere(new Point(10, 0, 5), 5);

        const ray: Ray = new Ray(new Point(0, 0, 30), new Vector(0, 0, -1).normalize());

        const t1 = sphere.intersection(ray);
        const t2 = otherSphere.intersection(ray);

        expect(t2).toBeNull();
        expect(t1).toBeNull();
    });
});
