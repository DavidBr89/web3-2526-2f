import {Request, Response, NextFunction} from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

type JwonPayloadType = jwt.JwtPayload & {sub: number; role: string}

const authMiddleware = (req: Request & {userId: number, role: string}, res: Response, next: NextFunction) => {
   
    const cookies = req.cookies;

    if(!cookies) {
        return res.sendStatus(401);
    }

    const token = cookies.bios_token;

    if(!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET || "", (err: jwt.VerifyErrors | null , payload: JwonPayloadType) => {
        if (err) {
            return res.sendStatus(401);
        }

        req.userId = payload.sub;
        req.role = payload.role;

        next();
    })

}

// Default export 
export default authMiddleware