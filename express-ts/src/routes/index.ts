import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Test");
})

export default router;

// const express = require("express");

// const router = express.Router();

// module.exports = router;