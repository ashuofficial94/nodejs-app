import fs = require("fs");
import http = require("http");
import { visitFunctionBody } from "typescript";

const requestHandler: http.RequestListener = (req, res) => {
    const method = req.method;
    const url = req.url;

    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Create user</title></head>");
        res.write(
            '<body>'+
            '<form method = "POST" action = "/create-user">'+
            '<input type="text" name="username">'+
            '<button type="submit">Create User</button>'+
            '</form>'+
            '</body>'
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/users") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<ul><li>User1</li></ul>");
        res.write("<a href = '/'>Back</a>")
        res.write("</html>");
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const data: Uint8Array[] = [];

        req.on("data", (chunk: Uint8Array) => {
            console.log(chunk);
            data.push(chunk);
        });

        return req.on("end", () => {
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
            res.statusCode = 302;
            res.setHeader("Location", "/users");
            return res.end();
        });
    }

    res.end();
};

module.exports = requestHandler;
