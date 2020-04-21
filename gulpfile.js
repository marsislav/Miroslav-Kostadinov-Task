const gulp = require('gulp');
const imgmin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('buildAll', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    /**/
    gulp.src('src/img/**/*')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/img'));
    /**/

    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
    /* */
    return gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))


});