const imageMap = import.meta.glob("../assets/images/*.png", {
  eager: true,
  import: "default",
});

const images = {};

for (const path in imageMap) {
  const id = path.split("/").pop().replace(".png", "");
  images[id] = imageMap[path];
}

export default images;
