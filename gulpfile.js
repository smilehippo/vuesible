var gulp = require('gulp')
var coffee = require('gulp-coffee')

gulp.task('default', function() {
  gulp.src('src/**/*.coffee')
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(gulp.dest('./'))
})
