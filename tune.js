var writeFile = require('writefile');
var sass = require('node-sass');
var importOnce = require('node-sass-import-once');

sass.render({
  file: './stylesheets/_tune.scss',
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

  writeFile('./dist/css/tune.css', result.css.toString());
});