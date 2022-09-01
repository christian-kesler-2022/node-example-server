const http = require('http');
const fs = require('fs');
const url = require('url');

var iframes = require('./utils/iframes.js');
var generator = require('./utils/generator.js');
var text_validator = require('./utils/text_validator.js');
var xml_validator = require('./utils/xml_validator.js');
var uploader = require('./utils/uploader.js');

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
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);

  console.log('requested url: ' + req.url);

  // Homepage
  if (req.url === '/') {
    writePage(res, '/../views/homepage.html');

    // Guides directory
  } else if (req.url === '/guides') {
    writePage(res, '/../views/guides/guides.html');

    // Guide pages
  } else if (req.url === '/guides/nodejs/getting-started') {
    writePage(res, '/../views/guides/nodejs/getting-started.html');
    //
  } else if (req.url === '/guides/nodejs/xmllint') {
    writePage(res, '/../views/guides/nodejs/xmllint.html');
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

    // Text Validator
  } else if (req.url === '/demos/text-validator') {
    writePage(res, '/../views/demos/text-validator/text-validator.html');
    //
  } else if (req.url === '/demos/text-validator/start') {
    generator.cycle();
    text_validator.cycle();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<script>window.location.href="/demos/text-validator";</script>');
    res.end();
    //
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

    // XML Validator
  } else if (req.url === '/demos/xml-validator') {
    writePage(res, '/../views/demos/xml-validator/xml-validator.html');
    //
    // } else if (req.url === '/demos/xml-validator/start') {
    //   xml_validator.cycle();
    //   res.writeHead(200, { 'Content-Type': 'text/html' });
    //   res.write('<script>window.location.href="/demos/xml-validator";</script>');
    //   res.end();
    //
  } else if (req.url === '/demos/xml-validator/iframe/input') {
    iframes.showDir(res, __dirname + '/../model/input/');
    //
  } else if (req.url === '/demos/xml-validator/iframe/error') {
    iframes.showDir(res, __dirname + '/../model/output/error/');
    //
  } else if (req.url === '/demos/xml-validator/iframe/fail') {
    iframes.showDir(res, __dirname + '/../model/output/fail/');
    //
  } else if (req.url === '/demos/xml-validator/iframe/ignore') {
    iframes.showDir(res, __dirname + '/../model/output/ignore/');
    //
  } else if (req.url === '/demos/xml-validator/iframe/pass') {
    iframes.showDir(res, __dirname + '/../model/output/pass/');
    //

    // File transfer endpoints
  } else if (req.url === '/download/invalid') {
    writePage(res, '/../views/errors/download.html');
    //
  } else if (req.url.includes('/download')) {
    try {
      const rs = fs.createReadStream(queryObject.dir + '/' + queryObject.file);
      res.setHeader(
        'Content-Disposition',
        'attachment;filename=' + queryObject.file
      );
      rs.pipe(res);
    } catch (e) {
      console.log('invalid download request');
      console.log(e);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<script>window.location.href="/download/invalid";</script>');
      res.end();
    }
    //
  } else if (req.url === '/upload') {
    console.log('SUCCESS! upload url reached ');
    if (req.method == 'POST') {
      try {
        uploader.save(req);

        // This is here incase any errors occur
      } catch (error) {
        res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('Server Borked');

        // error is object but response.write require string/buffer
        console.dir(error);
        return;
      }
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<script>window.location.href="/demos/xml-validator";</script>');
    res.end();
    //
  }
});

xml_validator.cycle();
server.listen(1000);
