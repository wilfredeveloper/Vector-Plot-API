// models/lineModel.ts
interface Result {
    x: number;
    y: number;
}

function drawDDALine(x1: number, y1: number, x2: number, y2: number, resultBuffer: Buffer): Buffer {
    
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    let xIncrement = dx / steps;
    let yIncrement = dy / steps;
    
    let x = x1,
    y = y1;
    
    resultBuffer = Buffer.alloc(8 * steps);

    // Store the coordinates in the buffer
    for (let k = 0; k < steps; k++) {
        resultBuffer.writeInt32LE(Math.round(x), k * 8);
        resultBuffer.writeInt32LE(Math.round(y), k * 8 + 4);
        x += xIncrement;
        y += yIncrement;
    }

    return resultBuffer;
}

function drawBresenhamLine(x1: number, y1: number, x2: number, y2: number, resultBuffer: Buffer): void {
    resultBuffer = Buffer.alloc(0);

    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
    let sx = x1 < x2 ? 1 : -1;
    let sy = y1 < y2 ? 1 : -1;

    let err = dx - dy;

    // Store the initial coordinates
    resultBuffer.writeInt32LE(x1, 0);
    resultBuffer.writeInt32LE(y1, 4);

    let offset = 8;

    while (x1 !== x2 || y1 !== y2) {
        if (offset + 8 > resultBuffer.length) {
            // Resize the buffer if it's not large enough
            const newBuffer = Buffer.alloc(resultBuffer.length * 2);
            resultBuffer.copy(newBuffer);
            resultBuffer = newBuffer;
        }

        let err2 = 2 * err;

        if (err2 > -dy) {
            err -= dy;
            x1 += sx;
        }

        if (err2 < dx) {
            err += dx;
            y1 += sy;
        }

        // Store the coordinates in the buffer
        resultBuffer.writeInt32LE(x1, offset);
        resultBuffer.writeInt32LE(y1, offset + 4);
        offset += 8;
    }
}

export { drawDDALine, drawBresenhamLine, Result };
