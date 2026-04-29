import {Request, Response, NextFunction} from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = true;

    if(isLoggedIn) {
        next();
    } else {
        res.status(401).json({ code: 438724782, message: "Gebruiker is niet ingelogd"});
    }

}

// Default export 
export default authMiddleware