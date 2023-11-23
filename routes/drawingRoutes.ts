// routes/drawingRoutes.ts

import express, { Request, Response } from 'express';
import { drawDDALine, drawBresenhamLine, drawLine } from '../controllers/drawingController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Algo-draw express");
});

router.post('/DDA', (req: Request, res: Response) => drawLine(req, res, drawDDALine));
router.post('/bresenham', (req: Request, res: Response) => drawLine(req, res, drawBresenhamLine));

export default router;