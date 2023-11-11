import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import * as treasureController from './controllers/treasure-controller';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/treasures', treasureController.getAll);
app.post('/treasures/generate', treasureController.generateTreasures);


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});