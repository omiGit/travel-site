var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImports = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImports, mixins, cssvar, nested, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
