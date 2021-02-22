import path from "path";

import express = require("express");

import rootDir from "../utils/path";

const router = express.Router();
const products: Array<object> = [];

// /admin/add-product => GET

router.get("/add-product", (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", { docTitle: "Add Product" });
});

// /admin/add-product => POST

router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

export { router, products };
