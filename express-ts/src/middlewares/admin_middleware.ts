import {Request, Response, NextFunction} from "express";

// Named export
export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const isAdmin = false;
    if(isAdmin) {
        next();
    } else {
        res.sendStatus(403);
    }
}

export const managerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next();
}
