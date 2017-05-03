'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  refresh = require('gulp-livereload'),
  concat = require('gulp-concat'),
  csslint = require('gulp-csslint'),
  jscpd = require('gulp-jscpd'),
  browserSync = require('browser-sync'),
  imageop = require('gulp-image-optimization');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

gulp.task('scripts', function() {
  return gulp.src(['node_modules/jquery.2/node_modules/jquery/dist/jquery.js','js/*.js'])
    .on('error', console.log)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(jscpd())
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  return gulp.src('css/*.css')
    .on('error', console.log)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(csslint())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('images', function(){
  return gulp.src('img/*')
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('img/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['css/*'],['styles']);
    gulp.watch(['js/*'],['scripts']);
    gulp.watch(['img/*'],['images']);
});

gulp.task('default', ['scripts', 'styles', 'watch', 'browser-sync', 'images']);