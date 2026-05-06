import express from "express";
import usersController from "../controllers/users_controller";
import authMiddleware from "../middlewares/auth_middleware";

const router = express.Router();

router.get("/", usersController.getAll);
router.get("/profile", authMiddleware, usersController.getById);
router.post("/", usersController.create);

export default router;