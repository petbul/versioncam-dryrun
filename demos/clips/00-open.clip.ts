import { clip } from "versioncam";

export default clip("00-open", { title: "The app opens", seed: 1 }, async (s) => {
  await s.open("/");
  s.caption("versioncam-dryrun");
  await s.hold(3000);
});
