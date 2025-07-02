const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const LOG_PATH = process.env.LOG_PATH || "./logs/log.txt";

const dir = path.dirname(LOG_PATH);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

app.get("/", (req, res) => {
    const msg = `dev log at ${new Date().toISOString()}\n`;
    fs.appendFileSync(LOG_PATH, msg);
    res.json({ msg: `Logged to ${LOG_PATH}`, data: msg });
});

app.listen(3000, () => {
    console.log("Dev app running on port 3000");
});