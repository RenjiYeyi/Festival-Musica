const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  //Identificar el archivo de SASS
  //Compilarlo
  //Almacenarlo o guardarlo en el disco duro

  src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("built/css"));

  done(); //Callback que avisa que gulp cuando llegamos al final
}

function dev(done){

    watch("src/scss/app.scss", css)

    done();
}

exports.dev = dev;
exports.css = css;