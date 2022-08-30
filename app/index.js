var http = require('http');
var fs = require('fs');

console.log(`Hello Node.js v${process.versions.node}!`);

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

function showDir(res, dir) {
  fs.readdir(dir, function (err, files) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (err) {
      console.log('Unable to scan directory: ' + err);
      res.write('Unable to scan directory: ' + err);
    } else {
      res.write("<a href='/demos/sort/iframe/input-dir'>Refresh</a><br>");
      res.write('================<br>');
      files.forEach(function (file) {
        res.write(file + '<br>');
      });
      res.write('================');
    }
    res.end();
  });
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
  } else if (req.url === '/guides/bootstrap') {
    writePage(res, '/views/guides/bootstrap.html');
  } else if (req.url === '/guides/typescript') {
    writePage(res, '/views/guides/typescript.html');
  } else if (req.url === '/guides/docker') {
    writePage(res, '/views/guides/docker.html');

    // Demos directory
  } else if (req.url === '/demos') {
    writePage(res, '/views/demos.html');

    // Demo pages
  } else if (req.url === '/demos/sort') {
    writePage(res, '/views/demos/sort.html');

    // Demo iframes
  } else if (req.url === '/demos/sort/iframe/input-dir') {
    showDir(res, __dirname + '/utils/demos/sort/input/');
  }
});

server.listen(1000);
