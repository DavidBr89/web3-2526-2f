import {Request, Response} from "express";
import { prisma } from "../config/prisma";

const usersController = {
    getAll: async (req: Request, res: Response) => {
        try {
             const users = await prisma.user.findMany({
                select: {
                    firstName: true,
                    lastName: true,
                    email: true
                }
             });
             res.json(users);
        } catch (error) {
            res.status(500).json({ code: 24242789427, message: "Fout met users"})
        }
    }
}

export default usersController