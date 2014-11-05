var src = './src';
var dest = "./build";

module.exports = {
  build: {
    src: src,
    dest: dest
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest
  },
  bower: {
    styles: {
      src: "bower_components/**/*.css",
      dest: dest + "/styles",
      name: "vendor.css"
    },
    scripts: {
      src: "bower_components/**/*.js",
      dest: dest + "/js",
      name: "vendor.js"
    }
  },
  stylus: {
    src: src + "/**/*.styl",
    dest: dest + "/styles",
    name: "app.css"
  },
  browserify: {
    debug: true,
    extensions: [".coffee", ".jsx"],
    bundleConfigs: [{
      entries: "./src/app.coffee",
      dest: dest + "/js",
      name: 'app.js'
    }]
  },
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      "!" + dest + "/**.map"
    ]
  }
};