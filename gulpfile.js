var gulp = require('gulp')
var jade = require('gulp-jade')

gulp.task('default',function(){
	gulp.src('./view/timyo.jade')
	.pipe(jade())
	.pipe(gulp.dest('./view/'))
})