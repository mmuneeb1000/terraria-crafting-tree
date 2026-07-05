import fs from "fs";
import path from "path";

const ROOT = "./public/images"; // Change to your image folder

function renameFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const oldPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      renameFiles(oldPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    const name = path.basename(entry.name, ext);

    const newName =
      name
        .toLowerCase()
        .replace(/'/g, "") // Remove apostrophes
        .replace(/[^a-z0-9]+/g, "_") // Replace spaces & symbols with _
        .replace(/^_+|_+$/g, "") + // Trim leading/trailing _
      ext;

    const newPath = path.join(dir, newName);

    if (oldPath === newPath) continue;

    if (fs.existsSync(newPath)) {
      console.warn(`Skipping (already exists): ${newName}`);
      continue;
    }

    fs.renameSync(oldPath, newPath);
    console.log(`${entry.name} -> ${newName}`);
  }
}

renameFiles(ROOT);

console.log("Done!");
