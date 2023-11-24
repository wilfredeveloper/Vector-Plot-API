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

function drawBresenhamLine(x1: number, y1: number, x2: number, y2: number): Buffer {
    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);

    let sx = (x1 < x2) ? 1 : -1;
    let sy = (y1 < y2) ? 1 : -1;

    let err = dx - dy;

    let coordinates = [];

    while(true){
        coordinates.push({x: x1, y: y1});

        if ((x1 == x2) && (y1 == y2)) break;
        let e2 = 2*err;
        if (e2 > -dy) { err -= dy; x1  += sx; }
        if (e2 < dx) { err += dx; y1  += sy; }
    }

    let resultBuffer = Buffer.alloc(coordinates.length * 8);
    for (let i = 0; i < coordinates.length; i++) {
        resultBuffer.writeInt32LE(coordinates[i].x, i * 8);
        resultBuffer.writeInt32LE(coordinates[i].y, i * 8 + 4);
    }

    return resultBuffer;
}

export { drawDDALine, drawBresenhamLine, Result };
