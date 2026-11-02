import { clip } from "versioncam";

export default clip(
  "click-the-counter-three-times-and-show",
  { title: "Counting up", seed: 11 },
  async (s) => {
    const counter = s.byRole("button", { name: /^Count is/ });

    await s.open("/");
    s.caption("Each click on the counter adds one");
    await s.hold(800);

    s.camera.zoom(counter, 1.5);
    await s.hold(1100);

    await s.click(counter);
    await s.settle({ label: "count 1" });
    await s.hold(1000);

    await s.click(counter);
    await s.settle({ label: "count 2" });
    await s.hold(1000);

    await s.click(counter);
    await s.settle({ label: "count 3" });
    await s.hold(1000);

    // Clear the cursor off the button so the final count reads unobstructed.
    await s.moveTo([1100, 300]);
    s.camera.reset();
    await s.hold(1800);
  },
);
