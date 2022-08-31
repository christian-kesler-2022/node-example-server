var http = require('http');
var fs = require('fs');
var iframes = require('./utils/iframes.js');
var generator = require('./utils/generator.js');
var validator = require('./utils/validator.js');

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(__dirname);

function writePage(res, file) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  var header = fs.readFileSync(
    __dirname + '/../views/partial/header.ht',
    'utf8'
  );
  res.write(header);

  var content = fs.readFileSync(__dirname + file, 'utf8');
  res.write(content);

  var footer = fs.readFileSync(
    __dirname + '/../views/partial/footer.ht',
    'utf8'
  );
  res.write(footer);

  res.end();
}

var server = http.createServer(function (req, res) {
  console.log('requested url: ' + req.url);

  // Homepage
  if (req.url === '/') {
    writePage(res, '/../views/homepage.html');

    // Guides directory
  } else if (req.url === '/guides') {
    writePage(res, '/../views/guides/guides.html');

    // Guide pages
  } else if (req.url === '/guides/nodejs') {
    writePage(res, '/../views/guides/nodejs/nodejs.html');
    //
  } else if (req.url === '/guides/docker/getting-started') {
    writePage(res, '/../views/guides/docker/getting-started.html');
    //
  } else if (req.url === '/guides/docker/persistent-storage') {
    writePage(res, '/../views/guides/docker/persistent-storage.html');
    //

    // Demos directory
  } else if (req.url === '/demos') {
    writePage(res, '/../views/demos/demos.html');

    // Demo pages
  } else if (req.url === '/demos/text-validator') {
    writePage(res, '/../views/demos/text-validator/text-validator.html');
    //
  } else if (req.url === '/demos/text-validator/start') {
    generator.cycle();
    validator.cycle();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<script>window.location.href="/demos/text-validator";</script>');
    res.end();
    //

    // Validator Demo
  } else if (req.url === '/demos/text-validator/iframe/input') {
    iframes.showDir(res, __dirname + '/../model/input/');
    //
  } else if (req.url === '/demos/text-validator/iframe/error') {
    iframes.showDir(res, __dirname + '/../model/output/error/');
    //
  } else if (req.url === '/demos/text-validator/iframe/fail') {
    iframes.showDir(res, __dirname + '/../model/output/fail/');
    //
  } else if (req.url === '/demos/text-validator/iframe/ignore') {
    iframes.showDir(res, __dirname + '/../model/output/ignore/');
    //
  } else if (req.url === '/demos/text-validator/iframe/pass') {
    iframes.showDir(res, __dirname + '/../model/output/pass/');
    //
  }
});

server.listen(1000);