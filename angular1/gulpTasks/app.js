/**
 * Created by eraldo on 13/02/2018.
 */

const gulp = require ('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const uglifycss = require('gulp-uglifycss')
const concat = require ('gulp-concat')
const htmlmin = require ('gulp-htmlmin')

gulp.task('app', ['app.html', 'app.css', 'app.assets'])

gulp.task('app.html', () => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
})

gulp.task('app.css', () => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({"uglyCommnets": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', () => {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})