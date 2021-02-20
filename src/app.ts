import path from "path";

import express = require("express");
import bodyParser = require("body-parser");

import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";
import rootDir from "./utils/path";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);

// above line executes both below instructions
// const server = http.createServer(app);
// server.listen(3000);
