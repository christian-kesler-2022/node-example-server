var fs = require('fs');

fs.readdir(__dirname + '/output/pass/', function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    fs.rename(
      __dirname + '/output/pass/' + file,
      __dirname + '/input/' + file,
      function (err) {
        if (err) throw err;
        console.log('Successfully moved ' + file);
      }
    );
    console.log(
      __dirname +
        '/output/pass/' +
        file +
        ' --> ' +
        __dirname +
        '/input/' +
        file
    );
  });
});

fs.readdir(__dirname + '/output/fail/', function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    fs.rename(
      __dirname + '/output/fail/' + file,
      __dirname + '/input/' + file,
      function (err) {
        if (err) throw err;
        console.log('Successfully moved ' + file);
      }
    );
    console.log(
      __dirname +
        '/output/pass/' +
        file +
        ' --> ' +
        __dirname +
        '/input/' +
        file
    );
  });
});
