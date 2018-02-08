/**
 * Created by Miyccc on 2017/8/30.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var path = require('path');
var fs = require('fs');

function handle_files() {
    var arr = fs.readFileSync('./index.html', 'utf-8').split('\n');
    var first = true, i = arr.length, o = [];

    while(i--){
        if(arr[i].match('[^min](.js)')){

            if(arr[i].match('http://pingjs.qq.com/h5/stats')){
                continue;
            }

            o.splice(0, 0, arr[i].match('src="(.*?)"')[1]);
            if(first){
                first = false;
                //将第一个非min.js文件变为main.min.js
                arr[i] = arr[i].replace(new RegExp('src="(.*?)"'), 'src="main.min.js"');
            }else{
                //删除剩余的非min.js
                arr.splice(i,1);
            }
        }
        //删除注释
        if(arr[i].match('(-->\r)$')){
            arr.splice(i,1);
        }
    }

    if (!fs.existsSync('./release')){
        fs.mkdirSync('./release');
    }

    fs.writeFileSync(path.join(__dirname + '/release/index.html'), arr.join('\n'));
    return o;
}

gulp.task('publisc', function () {

    files = handle_files();

    gulp
        .src(['libs/**/*.min.js'])
        .pipe(gulp.dest('./release/libs'));

    gulp
        .src(['assets/**/*'])
        .pipe(gulp.dest('./release/assets'));

    gulp
        .src(files)
        .pipe(concat('main.js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./release/'))
        .pipe(notify('Done!'));
});