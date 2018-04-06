var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    minjs       = require('gulp-uglify'),
    mincss      = require('gulp-clean-css'),
    suffix      = require('gulp-rename'),
    minimg      = require('gulp-imagemin');

var paths = {
      html:['index.html'],
      css:['css/style.css'],
      js:['scripts/registration.js']
    };

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('css', function(){
  gulp.src(paths.css)
  .pipe(reload({stream:true}))
});

gulp.task('js', function(){
  gulp.src(paths.js)
  .pipe(reload({stream:true}))
});


gulp.task('minjs', function () {
  gulp.src('scripts/registration.js')
  .pipe(minjs())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('mincss', function() {
  return gulp.src('css/style.css')
  .pipe(mincss())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest('build/css/'))
});

gulp.task('minimg', function(){
  gulp.src('images/*')
  .pipe(minimg())
  .pipe(gulp.dest('build/img'))
});

gulp.task('transferjquery', function(){
  gulp.src('js/jquery-3.2.1.min.js')
  .pipe(gulp.dest('build/js'))
});

gulp.task('watcher',function(){
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.css, ['css']);
});

gulp.task('build', ['minjs', 'mincss', 'transferjquery', 'minimg']);
gulp.task('default', ['watcher', 'browserSync']);

gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 4447,
    open: true,
    notify: false
  });
});
