// controllers/drawingController.ts

import { Request, Response } from 'express';
import { drawDDALine, drawBresenhamLine, Result } from '../models/lineModel';

function drawLine(req: Request, res: Response, drawFunction: Function): Response<any, Record<string, any>> {
    const { x1, y1, x2, y2 } = req.body as { x1: number; y1: number; x2: number; y2: number };

    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    // Call the draw function and get the result buffer
    let resultBuffer = drawFunction(x1, y1, x2, y2);

    // Read the result from the buffer
    let coordinates = [];
    for (let i = 0; i < resultBuffer.length / 8; i++) {
        coordinates.push({
            x: resultBuffer.readInt32LE(i * 8),
            y: resultBuffer.readInt32LE(i * 8 + 4)
        });
    }

    return res.json({ coordinates: coordinates });
}

export { drawDDALine, drawBresenhamLine, drawLine };

