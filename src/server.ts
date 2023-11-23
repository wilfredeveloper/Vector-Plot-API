// server.ts

import express from 'express';
import bodyParser from 'body-parser';
import drawingRoutes from '../routes/drawingRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/', drawingRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
