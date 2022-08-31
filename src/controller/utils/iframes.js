var fs = require('fs');

module.exports = {
  showDir: function showDir(res, dir) {
    fs.readdir(dir, function (err, files) {
      res.writeHead(200, { 'Content-Type': 'text/html' });

      if (err) {
        console.log('Unable to scan directory: ' + err);
        res.write('Unable to scan directory: ' + err);
      } else {
        var content = fs.readFileSync(
          __dirname +
            '/../../views/demos/text-validator/text-validator-iframe.html',
          'utf8'
        );
        res.write(content);

        res.write("<a href=''>Refresh</a><br>");
        res.write('================<br>');
        files.forEach(function (file) {
          res.write('\t' + file + '<br>');
        });
        res.write('================');
      }
      res.end();
    });
  },
};
