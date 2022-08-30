var fs = require('fs');

fs.readdir(__dirname + '/input/', function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  files.forEach(function (file) {
    if (file.includes('.txt')) {
      var content = fs.readFileSync(__dirname + '/input/' + file, 'utf8');
      if (content.includes('3')) {
        fs.rename(
          __dirname + '/input/' + file,
          __dirname + '/output/pass/' + file,
          function (err) {
            if (err) throw err;
            console.log('Successfully moved!');
          }
        );

        console.log('PASS: ' + file + ' contains the digit 3!');
      } else {
        fs.rename(
          __dirname + '/input/' + file,
          __dirname + '/output/fail/' + file,
          function (err) {
            if (err) throw err;
            console.log('Successfully moved!');
          }
        );
        console.log('FAIL: ' + file + " doesn't contain the digit 3. . . ");
      }
    }
  });
});
