var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function print1337 (html) {
  console.log(html);
}

getHTML(requestOptions, print1337);