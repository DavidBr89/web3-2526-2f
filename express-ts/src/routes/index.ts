import express from "express";
import usersController from "../controllers/users_controller";
import authMiddleware from "../middlewares/auth_middleware";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Test");
})

router.post("/login", usersController.login);

router.get("/verify", authMiddleware, usersController.verify);
router.get("/logout", authMiddleware,  usersController.logout);

export default router;

// const express = require("express");

// const router = express.Router();

// module.exports = router;