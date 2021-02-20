"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const path_2 = __importDefault(require("../utils/path"));
const router = express_1.Router();
router.get("/", (req, res, next) => {
    res.sendFile(path_1.default.join(path_2.default, 'views', 'shop.html'));
});
exports.default = router;
