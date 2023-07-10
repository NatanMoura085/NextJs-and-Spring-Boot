import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
const prisma = new PrismaClient();
export default class UseControllers {
  public static getUsers = async (req: Request, res: Response) => {
    try {
      const users = await prisma.register.findMany();
      res.status(401).json({ users });
    } catch (error) {
      res.send({ error });
    }
  };

  public static postUser = async (req: Request, res: Response) => {
    try {
      const saltValue = await bcrypt.genSalt(10)
      const { email, name, password, lastName } = req.body;
      const hashed = await bcrypt.hash(password, saltValue)
      const Newuser = { email, name, password: hashed, lastName }
      const user = await prisma.register.create({ data: Newuser });
      res.status(201).json({ Newuser });
    } catch (error) {
      res.status(401).json({ message: 'recurso nao disponivel', error })
    }
  };
}
