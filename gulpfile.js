const gulp=require('gulp');
const nunjucks=require('gulp-nunjucks-render');
const data=require('gulp-data');
const pagedata=require('./dist/assets/js/trips.json')

gulp.task('nunjucks', function() {
    return gulp.src('src/pages/*')
    .pipe(data(function(){
        return pagedata
    }))
    .pipe(nunjucks({
        path: ['src/templates']
    }))
    .pipe(gulp.dest('dist'))
});
