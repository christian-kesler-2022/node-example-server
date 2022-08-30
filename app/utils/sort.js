var fs = require('fs');
var fsi = require('./fsi.js');

module.exports = {
  sortFiles: function () {
    fs.readdir(__dirname + '/../../data/input/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      files.forEach(function (file) {
        if (file.includes('.txt')) {
          var content = fs.readFileSync(
            __dirname + '/../../data/input/' + file,
            'utf8'
          );
          if (content.includes('3')) {
            fsi.move(
              __dirname + '/../../data/input/' + file,
              __dirname + '/../../data/output/pass/' + file,
              function (err) {
                if (err) throw err;
                console.log('Successfully moved!');
              }
            );
          } else {
            fsi.move(
              __dirname + '/../../data/input/' + file,
              __dirname + '/../../data/output/fail/' + file,
              function (err) {
                if (err) throw err;
                console.log('Successfully moved!');
              }
            );
          }
        }
      });
    });
  },
};