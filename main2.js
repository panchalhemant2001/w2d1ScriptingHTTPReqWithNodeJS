var https = require('https');


function getAndPrintHTML(options) {

  var result = "";

  https.get(options, function(response) {
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

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);