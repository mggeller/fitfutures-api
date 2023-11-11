import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import * as treasureController from './controllers/treasure-controller';
import * as userController from './controllers/user-controller';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/treasures', treasureController.getAll);
app.get('/treasures/:id', treasureController.getTokenById);
app.post('/treasures/generate', treasureController.generateTreasures);

app.post('/users/register', userController.register);
app.post('/users/complete', userController.complete);
app.post('/users/isenabled', userController.isTreasureEnabled);
app.get('/users/collections/:id', userController.getCollections);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});