import express from "express";
import productsController from "../controllers/products_controller";
import authMiddleware from "../middlewares/auth_middleware";
import { adminMiddleware, managerMiddleware } from "../middlewares/admin_middleware";

const router = express.Router();

// Router level middleware
router.use(authMiddleware)

router.get("/", productsController.getAll);
router.post("/", productsController.create);
router.get("/:productId", productsController.getById);
// Path level middleware
router.delete("/:productId", adminMiddleware, productsController.delete);

router.all("/", productsController.getAll);


export default router;