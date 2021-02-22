import path from "path";

import { Router } from "express";

import rootDir from "../utils/path";
import { products as products } from "./admin";

const router = Router();

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", { products: products, docTitle: "Shopping List" });
});

export { router };
