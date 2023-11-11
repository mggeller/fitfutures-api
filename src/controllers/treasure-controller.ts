import { generateNewTreasures, getAllTreasures, getTokenInTreasure } from "../services/treasure-service";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  const treasures = await getAllTreasures();

  if (!treasures || treasures.length === 0) {
    res.status(404);
  }

  res.status(200).json(treasures);
};

export const generateTreasures = async (req: Request, res: Response) => {
  await generateNewTreasures();
  res.status(200).send("New treasures generated!");
};

export const getTokenById = async (req: Request, res: Response) => {
  if (isNaN(Number(req.params.id))) {
    res.status(404);
    return;
  }
  const tokens = await getTokenInTreasure(Number(req.params.id));
  res.status(200).json(tokens);
}
