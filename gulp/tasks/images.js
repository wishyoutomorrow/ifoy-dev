const webp = require("gulp-webp");

function images() {
  return app.gulp
    .src(app.path.src.images)
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images));
}

module.exports = images;
