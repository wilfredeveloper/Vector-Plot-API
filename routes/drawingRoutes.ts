// routes/drawingRoutes.ts

import express, { Request, Response } from 'express';
import path from 'path';
import { drawDDALine, drawBresenhamLine, drawLine } from '../controllers/drawingController';

const router = express.Router();

// Serve static files from the "Vector-Plot-API-homepage" directory
router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req: Request, res: Response) => {
    // Redirect to the static site
    res.redirect('/index.html');
});

router.post('/api/DDA', (req: Request, res: Response) => drawLine(req, res, drawDDALine));
router.post('/api/bresenham', (req: Request, res: Response) => drawLine(req, res, drawBresenhamLine));

export default router;