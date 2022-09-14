var fs = require('fs');

module.exports = {
  showDir: function showDir(res, dir) {
    fs.readdir(dir, function (err, files) {
      res.writeHead(200, { 'Content-Type': 'application/json' });

      if (err) {
        console.log('Unable to scan directory: ' + err);
        res.write('Unable to scan directory: ' + err);
      } else {
        // var content = fs.readFileSync(
        //   __dirname +
        //     '/../../views/demos/xml-validator/xml-validator-iframe.html',
        //   'utf8'
        // );
        // res.write(content);

        var fileArray = [];

        // res.write("<a href=''>Refresh</a><br>");
        // res.write('================<br>');
        files.forEach(function (file) {
          item = {
            name: file,
            link: '/download?dir=' + dir + '&file=' + file,
          };
          fileArray.push(item);
          // res.write(
          //   '\t<a href="/download?dir=' +
          //     dir +
          //     '&file=' +
          //     file +
          //     '">' +
          //     file +
          //     '</a><br>'
          // );
        });
        // res.write('================');
        res.write(JSON.stringify(fileArray));
      }
      res.end();
    });
  },
};
