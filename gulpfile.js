var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src([
        './js/1.11.3.jquery.min.js',
        './js/responsivevoice.js',
        './js/bvi-init-panel.js',
        './js/bvi.js',
        './js/js.cookie.js',
    ]).pipe(concat('app.js')).pipe(gulp.dest('./dist/'))
})

gulp.task('css', function() {
    return gulp.src(['./css/bvi.min.css',])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/'))
})
