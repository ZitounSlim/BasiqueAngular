/// <binding BeforeBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copy_libs', function () {
    return gulp.src([
         'node_modules/**/*.js',
    ]).pipe(gulp.dest('wwwroot/node_modules'))
});

gulp.task('copy_app', function () {
    return gulp.src([
         'app/**/*.js',
    ]).pipe(gulp.dest('wwwroot/app'))
});

gulp.task('default', ['copy_libs', 'copy_app']);