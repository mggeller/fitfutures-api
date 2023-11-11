import { registerUser } from "../services/user-service";
import { User } from "../types/user";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
   const user: User = req.body;
   if (!user) {
    res.status(404).send("Not enough information to register User");
   }

   const response = await registerUser(user.name, user.age, user.weight, user.height);

   if (!response) {
    res.status(404).send("Failed to register a user!");
   }

   res.status(200).json(response);
}