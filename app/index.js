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
  }
});

server.listen(1000);
