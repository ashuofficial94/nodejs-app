"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.router = void 0;
const express = require("express");
const router = express.Router();
exports.router = router;
const products = [];
exports.products = products;
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
