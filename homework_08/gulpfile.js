const gulp = require('gulp');
const less = require('gulp-less');
const browserSync= require('browser-sync').create();

gulp.task('less',function (done){
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
    done();
})

gulp.task('serve', function (){
    browserSync.init({
        server:{
            baseDir:'./'
        },
        post:3000
    })
    gulp.watch('./**/*').on('change',browserSync.reload)
})

//Выполняет таск последовательно
gulp.task('less:watch',function(){
    gulp.watch('./less/**/*.less', gulp.series('less'))
})

//Выполняет таск паралельно
gulp.task('default', gulp.parallel('less:watch','serve'))