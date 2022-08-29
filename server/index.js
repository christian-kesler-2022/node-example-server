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

  if (req.url === '/') {
    writePage(res, '/views/homepage.html');
  } else if (req.url === '/nodejs') {
    writePage(res, '/views/nodejs.html');
  } else if (req.url === '/bootstrap') {
    writePage(res, '/views/bootstrap.html');
  } else if (req.url === '/typescript') {
    writePage(res, '/views/typescript.html');
  }
});

server.listen(1000, '127.0.0.1');
