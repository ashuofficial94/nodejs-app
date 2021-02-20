"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const routes = require("./basics-routes");
const server = http.createServer(routes);
server.listen(3000);
