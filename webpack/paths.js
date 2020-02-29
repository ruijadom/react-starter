const path = require("path");

module.exports = {
  app: path.resolve(__dirname, "../", "src/app"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "src/index.html"),
  assetsFolder: "src/assets"
};
