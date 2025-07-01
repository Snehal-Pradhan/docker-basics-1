const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

app.get("/", (req, res) => {
    res.json({ msg: `You are using ${APP_NAME} right now !!` });
})

app.listen(PORT, () => {
    console.log(`app listening at port : ${PORT}`);
})