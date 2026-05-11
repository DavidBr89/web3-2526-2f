import {Request, Response, NextFunction} from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

type JwtPayloadType = JwtPayload & {sub: number; role: string}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
   
    const cookies = req.cookies;

    if(!cookies) {
        return res.sendStatus(401);
    }

    const token = cookies.bios_token;

    if(!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET || "", (err: jwt.VerifyErrors | null , payload: string | JwtPayload | undefined) => {
        if (err) {
            return res.sendStatus(401);
        }

        if (!payload || typeof payload === "string") {
            return res.sendStatus(401);
        }

        const jwtPayload = payload as JwtPayloadType;

        if (typeof jwtPayload.sub !== "number" || typeof jwtPayload.role !== "string") {
            return res.sendStatus(401);
        }

        req.userId = jwtPayload.sub;
        req.role = jwtPayload.role;

        next();
    })

}

// Default export 
export default authMiddleware