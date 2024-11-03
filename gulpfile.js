const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const paths = {
    src: './styles/',
    dest: './static/styles/',
    vendor: './node_modules/',
};

function main() {
    return gulp.src(`${paths.src}main.scss`)
        .pipe(sass({
            includePaths: [paths.src, paths.vendor],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dest));
}

function shared() {
    return gulp.src(`${paths.src}shared.scss`)
        .pipe(sass({
            includePaths: [paths.src, paths.vendor],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dest));
}



module.exports.default = () => gulp.watch('./styles/**/*.scss', { ignoreInitial: false }, main);
module.exports.build = gulp.series(main, shared);