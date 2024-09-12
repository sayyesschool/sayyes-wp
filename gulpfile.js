const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const paths = {
    src: './styles/',
    dest: './static/styles/',
    vendor: './node_modules/',
};

function styles() {
    return gulp.src(`${paths.src}main.scss`)
        .pipe(sass({
            includePaths: [paths.src, paths.vendor],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dest));
}

gulp.watch('./styles/**/*.scss', styles);

module.exports.default = styles;