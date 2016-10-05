var writeFile = require('writefile');
var sass = require('node-sass');
var importOnce = require('node-sass-import-once');

sass.render({
  file: './stylesheets/_play.scss',
  importer: importOnce,
  importOnce: {
    index: false,
    css: false,
    bower: true
  },
  includePaths: [
    './stylesheets/',
  ],
  outputStyle: 'expanded'
}, function(err, result) {

  if (err) {
    console.log(err.message);
    console.log('in:', err.file);
    console.log('line:', err.line, '/ column:', err.column);
  }

  else {
    console.log('sass all rendered!');
    console.log(result.css.toString());
  }

  console.log('------');

  writeFile('./dist/css/play.css', result.css.toString());
});