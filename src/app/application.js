const WebServer = require('../lib/mywebserver').http
const type = require('../lib/sampletype')
const customError = require('../lib/class_error')


const app = new WebServer();
app.initServer();

app.options("", (req, res) => {
  var headers = {};
  // set header to handle the CORS
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Headers"] =
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With";
  headers["Access-Contrl-Allow-Methods"] = "PUT, POST, GET, DELETE, OPTIONS";
  headers["Access-Control-Max-Age"] = "86400";
  res.writeHead(200, headers);
  res.end();
});

require('../endpoint')(app)
