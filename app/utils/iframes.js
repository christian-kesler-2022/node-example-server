var fs = require('fs');

module.exports = {
  showDir: function showDir(res, dir) {
    fs.readdir(dir, function (err, files) {
      res.writeHead(200, { 'Content-Type': 'text/html' });

      if (err) {
        console.log('Unable to scan directory: ' + err);
        res.write('Unable to scan directory: ' + err);
      } else {
        res.write("<a href=''>Refresh</a><br>");
        res.write('================<br>');
        files.forEach(function (file) {
          res.write('--> ' + file + '<br>');
        });
        res.write('================');
      }
      res.end();
    });
  },
};
