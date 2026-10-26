import sharp from "sharp";
await sharp(new URL("../public/og-card.svg", import.meta.url).pathname)
  .png()
  .toFile(new URL("../public/og-card.png", import.meta.url).pathname);
