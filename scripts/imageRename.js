import fs from "fs";
import path from "path";

const ROOT = "./public/images";

function renameFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const oldPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      renameFiles(oldPath);
      continue;
    }

    const lowerName = entry.name.toLowerCase();

    if (entry.name === lowerName) continue;

    const tempName = `__tmp__${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}${path.extname(entry.name)}`;

    const tempPath = path.join(dir, tempName);
    const newPath = path.join(dir, lowerName);

    fs.renameSync(oldPath, tempPath);
    fs.renameSync(tempPath, newPath);

    console.log(`${entry.name} -> ${lowerName}`);
  }
}

renameFiles(ROOT);

console.log("Done!");
