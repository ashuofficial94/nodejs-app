import path from "path";

import express = require("express");
import bodyParser = require("body-parser");

import { router as adminRoutes } from "./routes/admin";
import { router as shopRoutes } from "./routes/shop";
import rootDir from "./utils/path";

const app = express();

app.set("view engine", "ejs");
app.set("views", "dist/views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.static(path.join(rootDir, "..", "node_modules", "jquery", "dist"))
);
app.use(
    express.static(
        path.join(rootDir, "..", "node_modules", "bootstrap", "dist", "js")
    )
);
app.use(
    express.static(
        path.join(rootDir, "..", "node_modules", "bootstrap", "dist", "css")
    )
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("not-found", { docTitle: "Page Not Found" });
});

app.listen(3000);

// above line executes both below instructions
// const server = http.createServer(app);
// server.listen(3000);
