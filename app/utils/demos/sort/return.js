var fs = require('fs');

fs.readdir(__dirname + '/output/pass/', function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    fs.rename(
      __dirname + '/output/pass/' + file,
      __dirname + '/input/' + file,
      function (err) {
        if (err) throw err;
        console.log('Successfully moved ' + file);
      }
    );
  });
});

fs.readdir(__dirname + '/output/fail/', function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    fs.rename(
      __dirname + '/output/fail/' + file,
      __dirname + '/input/' + file,
      function (err) {
        if (err) throw err;
        console.log('Successfully moved ' + file);
      }
    );
  });
});
