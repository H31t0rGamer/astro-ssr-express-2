const express = require("express");

const app = express.Router();

app.get("/", (_req, res) => {
    res.send("APi!!!");
});

module.exports = app;