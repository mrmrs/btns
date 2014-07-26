// Load plugins

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),
    csslint = require('gulp-csslint'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;



// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./css/btns.css')
    .pipe(minifyCSS())
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
    .pipe(rename('btns.min.css'))
    .pipe(gulp.dest('./css/'));
});

// Task to optimize and minify images
gulp.task('minify-img', function() {
  return gulp.src('./img/**/*')
    .pipe((imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./img'));
});

// Task to optimize and minify svg
gulp.task('minify-svg', function(){
  gulp.src('./img/svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./img/svg'));
});

// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)
gulp.task('csslint', function(){
  gulp.src('./css/*.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false,
          'important': false
        }))
    .pipe(csslint.reporter());

});

gulp.task('pre-process', function(){
  gulp.src('./sass/btns.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass())
          .pipe(size({gzip: false, showFiles: true, title:'PRE-prefixed uncompressed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'PRE-prefixed uncompressed css'}))
          .pipe(prefix())
          .pipe(size({gzip: false, showFiles: true, title:'Prefixed uncompressed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'Prefixed uncompressed css'}))
          .pipe(gulp.dest('css'))
          .pipe(browserSync.reload({stream:true}));
      }));
});


// Initialize browser-sync which starts a static server also allows for 
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// Function to call for reloading browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


/*
   DEFAULT TASK

 • Process sass and lints outputted css
 • Outputted css is run through autoprefixer
 • Runs jshint on all js files in ./js/
 • Sends updates to any files in directory to browser for
   automatic reloading

*/

gulp.task('default', ['pre-process', 'minify-css', 'bs-reload', 'browser-sync'], function(){
  gulp.start('pre-process', 'csslint');
  gulp.watch('sass/*.scss', ['pre-process', 'minify-css']);
  gulp.watch('css/btns.css', ['bs-reload']);
  gulp.watch('*.html', ['bs-reload']);
});

gulp.task('production', function(){
    gulp.run('minify-css', 'minify-img', 'minify-svg');
});
