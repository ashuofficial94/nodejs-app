import path from 'path';

import {Router} from 'express';

import rootDir from '../utils/path';

const router = Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;

