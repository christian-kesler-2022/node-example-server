var fs = require('fs');

module.exports = {
  unsortFiles: function () {
    fs.readdir(__dirname + '/output/pass/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      files.forEach(function (file) {
        if (file.includes('.txt')) {
          fs.copy(
            __dirname + '/output/pass/' + file,
            __dirname + '/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved ' + file);
            }
          );
          fs.unlink(__dirname + '/output/pass/' + file);

          console.log(
            __dirname +
              '/output/pass/' +
              file +
              ' --> ' +
              __dirname +
              '/input/' +
              file
          );
        }
      });
    });

    fs.readdir(__dirname + '/output/fail/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      files.forEach(function (file) {
        if (file.includes('.txt')) {
          fs.copy(
            __dirname + '/output/fail/' + file,
            __dirname + '/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved ' + file);
            }
          );
          fs.unlink(__dirname + '/output/fail/' + file);

          console.log(
            __dirname +
              '/output/fail/' +
              file +
              ' --> ' +
              __dirname +
              '/input/' +
              file
          );
        }
      });
    });
  },
};
