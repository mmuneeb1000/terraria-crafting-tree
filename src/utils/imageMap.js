const files = import.meta.glob("../assets/images/*.png", {
  eager: true,
  import: "default",
});

const images = {};

const normalize = (str = "") => str.replace(/_/g, " ").toLowerCase();

for (const path in files) {
  const fileName = path.split("/").pop().replace(".png", "");
  images[normalize(fileName)] = files[path];
}

export const getImage = (name) => images[normalize(name)];

export default images;
