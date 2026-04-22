import express from "express";
import productsController from "../controllers/products_controller";

const router = express.Router();

router.get("/", productsController.getAll);
router.post("/", productsController.create);
router.get("/:productId", productsController.getById);
router.delete("/:productId", productsController.delete);

router.all("/", productsController.getAll);


export default router;