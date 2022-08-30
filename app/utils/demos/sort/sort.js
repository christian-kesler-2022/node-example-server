var fs = require('fs');

module.exports = {
  sortFiles: function () {
    fs.readdir(__dirname + '/input/', function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      files.forEach(function (file) {
        if (file.includes('.txt')) {
          var content = fs.readFileSync(__dirname + '/input/' + file, 'utf8');
          if (content.includes('3')) {
            fs.copyFile(
              __dirname + '/input/' + file,
              __dirname + '/output/pass/' + file,
              function (err) {
                if (err) throw err;
                console.log('Successfully moved!');
              }
            );
            fs.unlink(__dirname + '/input/' + file, (err) => {
              if (err) console.log(err);
            });

            console.log('PASS: ' + file + ' contains the digit 3!');
          } else {
            fs.copyFile(
              __dirname + '/input/' + file,
              __dirname + '/output/fail/' + file,
              function (err) {
                if (err) throw err;
                console.log('Successfully moved!');
              }
            );
            fs.unlink(__dirname + '/input/' + file, (err) => {
              if (err) console.log(err);
            });

            console.log('FAIL: ' + file + " doesn't contain the digit 3. . . ");
          }
        }
      });
    });
  },
};
