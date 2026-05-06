import express from "express";
import usersController from "../controllers/users_controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Test");
})

router.post("/login", usersController.login);

export default router;

// const express = require("express");

// const router = express.Router();

// module.exports = router;