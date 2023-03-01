import express from "express";
import bodyParser from "body-parser";
import viewEngine from "../src/config/viewEngine";
import webRouter from "../src/route/web";
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

viewEngine(app);
webRouter(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});