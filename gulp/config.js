const build = './build';

const locations = {
  js: './js',
  less: './less'
}

module.exports = {
  locations: locations,
  browserify: {
    files: [
      locations.js + '/Main.js'
    ],
    dest: build,
    name: 'app.js'
  },
  css: {
    files: [
      build + '/css/app.css'
    ],
    name: 'app.css',
    dest: build + '/css/'
  },
  less: {
    src: locations.less + '/app.less',
    watch: locations.less + '/**',
    dest: build + '/css/'
  }
};
