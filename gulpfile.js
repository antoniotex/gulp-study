// import gulp from 'gulp'
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define taskes
    gulp.src - Ppoint tofiles to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes

*/

//Logs Message
//dei gulp message para imprimir esse console log
gulp.task('message', () => console.log('Gulp is running 1'))

//Executei esse somente digitando gulp, pois é default
// gulp.task('default', () => console.log('Gulp is running 2'))

// Copia todos os arquivos HTML para a pasta dist
gulp.task('copyHtml', () => gulp.src('src/*.html').pipe(gulp.dest('dist')))

// Otimiza imagens do projeto, jogando dentro da pasta dist
//Utilizando o gulp-imagemin
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minificando o javascript para dentro da pasta dist
gulp.task('minify', () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// Compila o SASS para dentro da pasta dist
gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
})

// Juntando os scripts do projeto
gulp.task('scripts', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// Executa todas as tasks de uma só vez, e é lindo de se ver =)
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts'])