"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express = require("express");
const bodyParser = require("body-parser");
const admin_1 = require("./routes/admin");
const shop_1 = require("./routes/shop");
const path_2 = __importDefault(require("./utils/path"));
const app = express();
app.set("view engine", "ejs");
app.set("views", "dist/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path_1.default.join(__dirname, "public")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "jquery", "dist")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "bootstrap", "dist", "js")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "bootstrap", "dist", "css")));
app.use("/admin", admin_1.router);
app.use(shop_1.router);
app.use((req, res, next) => {
    res.status(404).render("not-found", { docTitle: "Page Not Found" });
});
app.listen(3000);
// above line executes both below instructions
// const server = http.createServer(app);
// server.listen(3000);
