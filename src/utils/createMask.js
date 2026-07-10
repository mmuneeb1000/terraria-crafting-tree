import { FONT } from "./pixelFont";

export function createMask(text, cols, rows) {
  text = text.toUpperCase();

  const letterWidth = 5;
  const letterHeight = 7;
  const spacing = 1;

  const mask = Array.from({ length: rows }, () => Array(cols).fill(false));

  const wordWidth = text.length * letterWidth + (text.length - 1) * spacing;

  if (wordWidth > cols) {
    console.warn(
      `"${text}" is ${wordWidth} columns wide but the grid is only ${cols} columns.`,
    );
  }

  const startX = Math.floor((cols - wordWidth) / 2);
  const startY = Math.floor((rows - letterHeight) / 2);

  text.split("").forEach((char, charIndex) => {
    const glyph = FONT[char] || FONT[" "];

    glyph.forEach((rowString, y) => {
      rowString.split("").forEach((pixel, x) => {
        if (pixel !== "1") return;

        const px = startX + charIndex * (letterWidth + spacing) + x;
        const py = startY + y;

        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          mask[py][px] = true;
        }
      });
    });
  });

  return mask;
}
