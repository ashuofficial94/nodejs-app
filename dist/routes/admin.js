"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express = require("express");
const path_2 = __importDefault(require("../utils/path"));
const router = express.Router();
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    res.sendFile(path_1.default.join(path_2.default, 'views', 'add-product.html'));
});
// /admin/add-product => POST 
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
exports.default = router;
