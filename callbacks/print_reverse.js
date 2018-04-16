var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(html) {
  var result = "";

  for(var i = html.length - 1; i >= 0; i--) {
    result += html.substr(i, 1);
  }

  console.log(result);
}


getHTML(requestOptions, printReverse);