const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const paths = {
    vendor: './node_modules/',
    src: './styles/',
    dest: './'
};

function styles() {
    return gulp.src(`${paths.src}style.scss`)
        .pipe(sass({
            includePaths: [paths.vendor],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.dest));
}

gulp.watch('./styles/**/*.scss', styles);

module.exports.default = styles;