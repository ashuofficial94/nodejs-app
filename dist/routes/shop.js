"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("./admin");
const router = express_1.Router();
exports.router = router;
router.get("/", (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", { products: admin_1.products, docTitle: "Shopping List" });
});
