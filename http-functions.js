var https = require('https');


module.exports = function getHTML(options, callback) {

  var result = "";

  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      //console.log('Chunk Received. Length:', data.length);
      result += data;
    });


    response.on('end', function() {
      callback(result);
      console.log('Response stream complete');
    })
  });
}