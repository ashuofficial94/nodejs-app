import fs = require("fs");
import http = require("http");

const requestHandler: http.RequestListener = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head> <title>Enter Message</title></head>");
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body: Uint8Array[] = [];

        req.on("data", chunk => body.push(chunk));

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody
                .substr(parsedBody.indexOf("=") + 1)
                .replace(/\+/g, " ");

            //method sent as an argument to write file is executed after the file has been written
            //it also has a error parameter which is set to null if no error occurs

            fs.writeFile("./output/message.txt", message, (err) => {
                res.statusCode = 302; //redirection status code
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Message</title></head>");
    res.write("<body><h0>Welcome to Node.js Server</h1><body>");
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;
