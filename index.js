var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log('requested url: ' + req.url);

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var header = fs.readFileSync(
      __dirname + '/views/partial/header.ht',
      'utf8'
    );
    res.write(header);

    var data = fs.readFileSync(__dirname + '/views/homepage.html', 'utf8');
    res.write(data);

    var footer = fs.readFileSync(
      __dirname + '/views/partial/footer.ht',
      'utf8'
    );
    res.write(footer);

    res.end();
  }
});

server.listen(1000, '127.0.0.1');

console.log(`Hello Node.js v${process.versions.node}!`);
