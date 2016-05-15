import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', () => {
  gulp.src(['./**/*.es6',])
    .pipe(babel({'presets' : ['es2015']}))
    .pipe(gulp.dest('./'));
});
 
let defaultTasklist = ['babel']
gulp.task('watch', defaultTasklist, () => {
  gulp.watch('./**/*.es6', ['babel']);
});

gulp.task('default', ['watch']);