var generator = {
  execute: function (callback) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return result;
    }

    content = generateString(5);

    fs.writeFile('../data/input/' + content + '.txt', content, function (err) {
      if (err) {
        callback(err);
      }
      console.log('File is created successfully.');
    });
  },
  cycle: function (callback) {
    setTimeout(function () {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }

        return result;
      }

      content = generateString(5);

      fs.writeFile(
        '../data/input/' + content + '.txt',
        content,
        function (err) {
          if (err) {
            callback(err);
          }
          console.log('File is created successfully.');
        }
      );

      generator.cycle();
    }, 4000);
  },
};

module.exports = generator;
