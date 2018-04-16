var https = require('https');


function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var result = "";

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      //console.log('Chunk Received. Length:', data.length);
      result += data;
    });


    response.on('end', function() {
      console.log(result);
      console.log('Response stream complete');
    })
  });
}


getAndPrintHTML();