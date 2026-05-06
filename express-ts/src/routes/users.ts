import express from "express";
import usersController from "../controllers/users_controller";

const router = express.Router();

router.get("/", usersController.getAll);
router.post("/", usersController.create);

export default router;