const express = require("express");
const fs = require("fs")
const path = require("path")

const app = express();
const LOG_PATH = process.env.LOG_PATH || "/data/log.txt";

const dir = path.dirname(LOG_PATH);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}


app.get("/", (req, res) => {
    const msg = `hello at ${Date.now().toLocaleString()}\n`
    fs.appendFileSync(LOG_PATH, msg);
    res.json({ msg: `logged to ${LOG_PATH}`, data: msg })
})


app.listen(3001, () => {
    console.log(`app listening at port 3001`);
})