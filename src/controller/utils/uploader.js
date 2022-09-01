const fs = require('fs'),
  os = require('os'),
  path = require('path');

var fsi = require('./fsi.js');

var uploader = {
  save: function (req) {
    // Resolve path/to/temp/file
    var temp = path.resolve(
      os.tmpdir(),
      'temp' + Math.floor(Math.random() * 10)
    );

    // This opens up the writeable stream to temporary file
    var writeStream = fs.createWriteStream(temp);

    // Write data in memory instead of storage
    //writeStream.cork(); // disabled for causing hang

    // This pipes the POST data to the file
    req.pipe(writeStream);

    // After the temporary file is creates, create real file
    writeStream.on('finish', () => {
      reader = fs.readFileSync(temp);
      filename = reader.slice(
        reader.indexOf('filename="') + 'filename="'.length,
        reader.indexOf('"\r\nContent-Type')
      );
      boundary = reader.slice(0, reader.indexOf('\r\n'));
      content = reader.slice(
        reader.indexOf('\r\n\r\n') + '\r\n\r\n'.length,
        reader.lastIndexOf(Buffer.from('\r\n') + boundary)
      );

      // After real file is created, delete temporary file
      fs.writeFileSync(filename.toString(), content);
      fs.unlinkSync(temp);

      fsi.move(
        __dirname + '/../' + filename.toString(),
        __dirname + '/../../model/input/' + filename.toString(),
        function (err) {
          if (err) throw err;
          console.log('ERROR  --> ' + filename.toString());
        }
      );
    });
  },
};

module.exports = uploader;
