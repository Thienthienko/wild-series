const express = require("express");

const router = express.Router();

/* ************************************************************************* */
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/welcome", sayWelcome);

const { browse } = require("../../controllers/programActions");

router.get("/program", browse);

/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
