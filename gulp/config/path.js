const rootFolder = "dist/";
const srcFolder = "./src";

module.exports = {
  build: {
    dist: rootFolder,
    css: `${rootFolder}/assets/style`,
    images: `${rootFolder}/assets/images`,
    fonts: `${rootFolder}/assets/fonts`,
    js: `${rootFolder}/assets/scripts`,
  },
  src: {
    html: `${srcFolder}/index.html`,
    scss: `${srcFolder}/theme/style/index.scss`,
    images: `${srcFolder}/theme/images/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/theme/images/**/*.svg`,
    js: `${srcFolder}/assets/scripts`,
  },
  watcher: {
    scss: `${srcFolder}/theme/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    js: `${srcFolder}/assets/scripts/**/*`,
    images: `${srcFolder}/theme/images/**/*`,
  },
  buildFolder: rootFolder,
  srcFolder: srcFolder,
};
