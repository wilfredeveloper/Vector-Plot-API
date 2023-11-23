// controllers/drawingController.ts

import { Request, Response } from 'express';
import { drawDDALine, drawBresenhamLine, Result } from '../models/lineModel';

function drawLine(req: Request, res: Response, drawFunction: Function): Response<any, Record<string, any>> {
    const { x1, y1, x2, y2 } = req.body as { x1: number; y1: number; x2: number; y2: number };

    if (x1 === undefined || y1 === undefined || x2 === undefined || y2 === undefined) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    // Create a buffer to hold the result
    const resultBuffer: Buffer = Buffer.alloc(8 * Math.ceil(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))));

    // Call the draw function
    drawFunction(x1, y1, x2, y2, resultBuffer);

    // Read the result from the buffer
    const result: Result[] = [];
    for (let i = 0; i < resultBuffer.length; i += 8) {
        result.push({
            x: resultBuffer.readInt32LE(i),
            y: resultBuffer.readInt32LE(i + 4),
        });
    }

    return res.json({ coordinates: result });
}

export { drawDDALine, drawBresenhamLine, drawLine };

