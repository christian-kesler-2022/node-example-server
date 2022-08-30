var fs = require('fs');
var fsi = require('./fsi.js');

module.exports = {
  unsortFiles: function () {
    fs.readdir(__dirname + '/../../data/output/pass/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      files.forEach(function (file) {
        if (file.includes('.txt')) {
          fsi.move(
            __dirname + '/../../data/output/pass/' + file,
            __dirname + '/../../data/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved!');
            }
          );
        }
      });
    });

    fs.readdir(__dirname + '/../../data/output/fail/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      files.forEach(function (file) {
        if (file.includes('.txt')) {
          fsi.move(
            __dirname + '/../../data/output/fail/' + file,
            __dirname + '/../../data/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved!');
            }
          );
        }
      });
    });
  },
};
