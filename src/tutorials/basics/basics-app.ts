import http = require('http');

import routes = require('./basics-routes')

const server = http.createServer(routes);

server.listen(3000);