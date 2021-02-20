"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use('/users', (req, res, next) => {
    console.log('You are at users');
    res.send('<h1>Users</h1>');
});
app.use('/', (req, res, next) => {
    console.log("You are here");
    res.send("<h1>Default Response</h2>");
});
app.listen(3000);
