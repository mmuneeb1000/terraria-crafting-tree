import fs from "fs";
import path from "path";

const imagesDir = path.resolve("public/images");
const outputFile = path.resolve("public/data/imageMap.json");

const imageMap = {};

const files = fs.readdirSync(imagesDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
    continue;
  }

  const id = path.basename(file, ext);

  imageMap[id] = true;
}

fs.writeFileSync(outputFile, JSON.stringify(imageMap, null, 2), "utf8");

console.log(
  `✓ Generated imageMap.json with ${Object.keys(imageMap).length} images.`,
);
