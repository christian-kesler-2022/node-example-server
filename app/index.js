var http = require('http');
var fs = require('fs');
var iframes = require('./utils/iframes.js');
var sort = require('./utils/sort.js');
var unsort = require('./utils/unsort.js');
var generator = require('./utils/generator.js');
var validator = require('./utils/validator.js');

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(__dirname);

function writePage(res, file) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  var header = fs.readFileSync(__dirname + '/views/partial/header.ht', 'utf8');
  res.write(header);

  var content = fs.readFileSync(__dirname + file, 'utf8');
  res.write(content);

  var footer = fs.readFileSync(__dirname + '/views/partial/footer.ht', 'utf8');
  res.write(footer);

  res.end();
}

function writeIframe(res, file) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var content = fs.readFileSync(__dirname + file, 'utf8');
  res.write(content);
  res.end();
}

var server = http.createServer(function (req, res) {
  console.log('requested url: ' + req.url);

  // Homepage
  if (req.url === '/') {
    writePage(res, '/views/homepage.html');

    // Guides directory
  } else if (req.url === '/guides') {
    writePage(res, '/views/guides.html');

    // Guide pages
  } else if (req.url === '/guides/nodejs') {
    writePage(res, '/views/guides/nodejs.html');
    //
  } else if (req.url === '/guides/bootstrap') {
    writePage(res, '/views/guides/bootstrap.html');
    //
  } else if (req.url === '/guides/typescript') {
    writePage(res, '/views/guides/typescript.html');
    //
  } else if (req.url === '/guides/docker/getting-started') {
    writePage(res, '/views/guides/docker/getting-started.html');
    //
  } else if (req.url === '/guides/docker/persistent-storage') {
    writePage(res, '/views/guides/docker/persistent-storage.html');
    //

    // Demos directory
  } else if (req.url === '/demos') {
    writePage(res, '/views/demos.html');

    // Demo pages
  } else if (req.url === '/demos/sort') {
    writePage(res, '/views/demos/sort.html');
    //
  } else if (req.url === '/demos/validator') {
    writePage(res, '/views/demos/validator-index.html');
    //
  } else if (req.url === '/demos/validator/start') {
    generator.cycle();
    validator.cycle();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<script>window.location.href="/demos/validator";</script>');
    res.end();
    //

    // Demo iframes
  } else if (req.url === '/demos/sort/iframe/input') {
    iframes.showDir(res, __dirname + '/../data/input/');
    //
  } else if (req.url === '/demos/sort/iframe/output/pass') {
    iframes.showDir(res, __dirname + '/../data/output/pass/');
    //
  } else if (req.url === '/demos/sort/iframe/output/fail') {
    iframes.showDir(res, __dirname + '/../data/output/fail/');
    //

    // functions
  } else if (req.url === '/demos/sort/iframe/functions') {
    writeIframe(res, '/views/demos/sort-functions.html');
    //
  } else if (req.url === '/demos/sort/iframe/functions/sort') {
    sort.sortFiles();
    writeIframe(res, '/views/demos/sort-functions.html');
    //
  } else if (req.url === '/demos/sort/iframe/functions/unsort') {
    unsort.unsortFiles();
    writeIframe(res, '/views/demos/sort-functions.html');
    //

    // Validator Demo
  } else if (req.url === '/demos/validator/iframe/input') {
    iframes.showDir(res, __dirname + '/../data/input/');
    //
  } else if (req.url === '/demos/validator/iframe/error') {
    iframes.showDir(res, __dirname + '/../data/output/error/');
    //
  } else if (req.url === '/demos/validator/iframe/fail') {
    iframes.showDir(res, __dirname + '/../data/output/fail/');
    //
  } else if (req.url === '/demos/validator/iframe/ignore') {
    iframes.showDir(res, __dirname + '/../data/output/ignore/');
    //
  } else if (req.url === '/demos/validator/iframe/pass') {
    iframes.showDir(res, __dirname + '/../data/output/pass/');
    //

    // functions
  } else if (req.url === '/demos/validator/iframe/start') {
    writeIframe(res, '/views/demos/sort-functions.html');
    //
  }
});

server.listen(1000);
