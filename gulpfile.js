const {src, dest, series, watch} = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const argv = require('yargs').argv
const gulpif = require('gulp-if')
const image = require('gulp-imagemin')
const webp = require('gulp-webp')
const sass = require('gulp-sass')(require('sass'))
const bulk = require('gulp-sass-bulk-importer')

const isDev = function(){
  return !argv.prod;
}

const isProd = function(){
  return !!argv.prod;
}

const clean = () =>{
  return del(['dist'])
}

const resources = () => {
  return src ("src/resources/**")
  .pipe(dest('dist'))
}

const sassStyles = () => {
  return src('src/styles/**/*.scss')
  .pipe(gulpif(isDev(),sourcemaps.init()))
  .pipe(bulk())
  .pipe(sass())
  .pipe(gulpif(isProd(),autoprefixes({
        cascade: false,
      })))
  .pipe(cleanCSS({
    level:2,
  }))
  .pipe(concat('style.min.css'))
  .pipe(gulpif(isDev(),sourcemaps.write()))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
  .pipe(gulpif(isProd(),htmlMin({
    collapseWhitespace: true,
  })))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const scripts = ()=> {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js'
  ])
  .pipe(gulpif(isDev(),sourcemaps.init()))
  .pipe(babel({
    presets:['@babel/env']
  }))
  .pipe(concat('app.js'))
  .pipe(gulpif(isProd(),uglify({
    toplevel: true
  }).on('error', notify.onError())))
  .pipe(gulpif(isDev(),sourcemaps.write()))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
  .pipe(image())
  .pipe(gulpif(isProd(),webp({
    quality: 80
  })))
  .pipe(dest('dist/images'))
}

const watchFiles = ()=>{
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/**/*.scss', sassStyles)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.clean = clean
exports.images = images
exports.sassy = sassStyles

exports.default = series(clean, htmlMinify, sassStyles,  scripts, resources, images, watchFiles)
