import http = require('http');

import routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);