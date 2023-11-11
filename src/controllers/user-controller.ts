import { completeChallenge, getUserOwnedCollectionsAndTokens, registerUser } from "../services/user-service";
import { User } from "../types/user";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const user: User = req.body;
  if (!user) {
    res.status(404).send("Not enough information to register User");
  }

  const response = await registerUser(
    user.name,
    user.age,
    user.weight,
    user.height
  );

  if (!response) {
    res.status(404).send("Failed to register a user!");
  }

  res.status(200).json(response);
};

export const complete = async (req: Request, res: Response) => {
  const { treasureId, userId } = req.body;

  if (!treasureId || !userId) {
    res.status(404).send("Did not find this User or Challenge");
  }

  if (isNaN(Number(treasureId))) {
    res.status(404).send("Treasure id is in incorrect type");
  }

  if (isNaN(Number(userId))) {
    res.status(404).send("User id is in incorrect type");
  }

  const response = await completeChallenge(Number(userId), Number(treasureId));

  if (!response) {
    res.status(404).send("Failed to complete the challenge");
  }

  res.status(200).json(response);
};

export const getCollections = async (req: Request, res: Response) => {
  if (isNaN(Number(req.params.id))) {
    res.status(404);
    return;
  }

  const collections = await getUserOwnedCollectionsAndTokens(Number(req.params.id));

  if (!collections) {
    res.status(404).send("User not found");
  }

  res.status(200).json(collections);
};
