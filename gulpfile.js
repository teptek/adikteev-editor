var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    uglify = require("gulp-uglifyjs"),
    bower = require('gulp-bower');

var config = {
    sassPath: './assets/sass',
    bowerDir: './bower_components'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('bootstrap-css', function() {
    return gulp.src([
            config.bowerDir + '/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './sass',
                config.bowerDir + '/bootstrap-sass/assets/stylesheets'
            ]
        })
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('fonts', function() {
    return gulp.src([
            './assets/fonts/*.eot',
            './assets/fonts/*.svg',
            './assets/fonts/*.ttf',
            './assets/fonts/*.svg',
            './assets/fonts/*.woff',
            './assets/fonts/*.woff2',
            config.bowerDir + '/font-awesome/fonts/**.*'
        ])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('css-plugins', function() {
    return gulp.src([
            './assets/css/*.css',
            config.bowerDir + '/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css',
            config.bowerDir + '/dropzone/dist/min/dropzone.min.css'
        ])
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
    return gulp.src([
            './assets/img/*.svg',
            './assets/img/*.jpg',
            './assets/img/*.png',
            './assets/img/*.gif'
        ])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('colorpicker-img', function() {
    return gulp.src(config.bowerDir + '/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/**.*')
        .pipe(gulp.dest('dist/img/bootstrap-colorpicker'));
});

gulp.task('js', function() {
   return gulp.src([
           config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.min.js',
           config.bowerDir + '/jquery/dist/jquery.min.js',
           config.bowerDir + '/jquery-sticky/jquery.sticky.js',
           config.bowerDir + '/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js',
           config.bowerDir + '/draggabilly/dist/draggabilly.pkgd.min.js',
           config.bowerDir + '/rangeslider.js/dist/rangeslider.min.js',
           config.bowerDir + '/dropzone/dist/min/dropzone.min.js'
   ])
       .pipe(gulp.dest('dist/js'));
});

gulp.task('uglify', function() {
    gulp.src('./assets/js/*.js')
        .pipe(uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/js'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'bootstrap-css', 'css', 'img', 'js', 'uglify', 'css-plugins', 'colorpicker-img']);