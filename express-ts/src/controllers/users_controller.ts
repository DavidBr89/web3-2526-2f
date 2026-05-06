import {Request, Response} from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    },
    getById: async (req: Request & {userId: number, role: string}, res: Response) => {

        try {
            
            const foundUser = await prisma.user.findUnique({
                where: {
                    id: req.userId
                }
            })

            res.json(foundUser);


        } catch (error) {
            res.sendStatus(500);
        }


    },
    create: async (req: Request, res: Response) => {

        const userData = req.body;
        try {

            const foundUser = await prisma.user.findUnique({
                where: {
                    email: userData.email
                }
            })

            if(foundUser !== null) {
                return res.json({ code: 24278472, message: "Registratie is niet gelukt"
                })
            }

            const hashedPassword = await bcrypt.hash(userData.password, 12);
            
            const newUser = await prisma.user.create({
                data: {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    password: hashedPassword
                }
            })

            const payload = {
                sub: newUser.id,
                role: "USER",
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
                expiresIn: "15m"
            })

            console.log(token);


            res.cookie("bios_token", token, { httpOnly: true, expires: new Date(Date.now() + 15 * 60 * 1000), secure: false});
            
            res.status(201).json(newUser);


        } catch (error) {
            res.sendStatus(500);
        }




    },
    login: async (req: Request, res: Response) => {

        const credentials = req.body;

        try {
            
            const foundUser = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if(!foundUser) {
                return res.sendStatus(401);
            }

            const result = await bcrypt.compare(credentials.password, foundUser.password);

            if(!result) {
                return res.sendStatus(401);
            }

            const payload = {
                sub: foundUser.id,
                role: "USER"
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
                expiresIn: "15m",
            })

            res.cookie("bios_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 15 * 60 * 1000)
            })

            res.send("Gebruiker ingelogd")


        } catch (error) {
            res.sendStatus(500);
        }


    }
}

export default usersController