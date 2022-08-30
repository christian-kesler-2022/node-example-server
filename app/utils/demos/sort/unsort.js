var fs = require('fs');

module.exports = {
  unsortFiles: function () {
    fs.readdir(__dirname + '/output/pass/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      files.forEach(function (file) {
        if (file.includes('.txt')) {
          fs.copyFile(
            __dirname + '/output/pass/' + file,
            __dirname + '/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved ' + file);
            }
          );
          fs.unlink(__dirname + '/output/pass/' + file, (err) => {
            if (err) console.log(err);
          });

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
          fs.copyFile(
            __dirname + '/output/fail/' + file,
            __dirname + '/input/' + file,
            function (err) {
              if (err) throw err;
              console.log('Successfully moved ' + file);
            }
          );
          fs.unlink(__dirname + '/output/fail/' + file, (err) => {
            if (err) console.log(err);
          });

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
