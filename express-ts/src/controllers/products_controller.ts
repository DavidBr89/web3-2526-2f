
import {Request, Response} from "express";
// CRUD operaties

const productsController = {
    getAll: (req: Request, res: Response) => {

        const {lang, color} = req.query;

        console.log(req.ip);

        if(lang === "nl") {
            console.log(color);
            return res.send("Alle producten");
        }

        res.send("All products");
    },
    getById: (req: Request, res: Response) => {
        const { productId  } = req.params;

        res.send(`Product met id: ${productId}`);
    },
    create: (req: Request, res: Response) => {

        const newProduct = req.body;

        const addedProduct = { id: 123, ...newProduct};

        res.status(201).json(addedProduct);
        // Enkel statuscode terugsturen en geen content
        // res.sendStatus(204);
    },
    delete: (req: Request, res: Response) => {
        res.sendStatus(204);
    }
}

export default productsController