import gulp from "gulp";
import gulpif from "gulp-if";
import plumber from "gulp-plumber";
import sourcemap from "gulp-sourcemaps";
import less from "gulp-less";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sync from "browser-sync";
import rename from "gulp-rename";
import svgstore from "gulp-svgstore";
import webp from "gulp-webp";
import csso from "gulp-csso";
import imagemin from 'gulp-imagemin';
import del from "del";

const serv = sync.create();

// Styles for Production
const stylesProduction = () => {
  return gulp
    .src("source/less/style.less")
    .pipe(plumber()) //обработчик ошибок
    .pipe(less()) //превращает в css
    .pipe(postcss([autoprefixer()])) //получаем css с префиксами
    .pipe(csso()) //минификация css
    .pipe(rename("styles.min.css")) //переименование файла
    .pipe(gulp.dest("build/css"))//в какую папку сохраняется результат
};

export const stylesProductionRun = stylesProduction;

// Styles for Dev
const stylesDev = () => {
  cleanDevCssRun()
  return gulp
    .src("source/less/style.less")
    .pipe(plumber()) //обработчик ошибок
    .pipe(sourcemap.init())//инициализируем карты кода(запоминает начальный файл .less)
    .pipe(less()) //превращает в css
    .pipe(postcss([autoprefixer()])) //получаем css с префиксами
    .pipe(csso()) //минификация css
    .pipe(rename("styles.min.css")) //переименование файла
    .pipe(sourcemap.write("."))//записываем карты кода
    .pipe(gulp.dest("source/css"))//в какую папку сохраняется результат
    .pipe(serv.stream());
};

export const stylesDevRun = stylesDev;

//оптимизируем изображения
const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true}),
        imagemin.svgo()
    ]))
}

export const imagesRun = images;


//создаём webp изображения
const createWebp = () => {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(webp({qualiry:95}))
    .pipe(gulp.dest("source/img"));
};

export const createWebpRun = createWebp;

//собираем спрайт
const sprite = () => {
  return gulp
    .src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
};

export const spriteRun = sprite;

// Server
const server = (done) => {
  serv.init({
    server: {
      baseDir: "source",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
  gulp.watch("source/less/**/*.less", gulp.series("stylesDevRun"));
  gulp.watch("source/*.html", gulp.series("servReload"))
};

export const serverRun = server;

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**/!(icon-*).*",
    "source/js/**",
    "source/*.ico",
    "source/*.html"
    ], {
    base: "source"
    })
    .pipe(gulp.dest("build"))

};

export const copyRun = copy;

const clean = () => {
  return del("build");
};

export const cleanRun = clean;


const cleanDevCss = () => {
  return del("source/css");
}

export const cleanDevCssRun = cleanDevCss;


const reload = () => {
  return serv.reload();
}

export const servReload = reload;
