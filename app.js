const express = require("express");

const dotenv = require('dotenv');
dotenv.config();
require("./Database");

const bodyParser = require("body-parser");

/* IMPORT ROUTES */
const todoRoutes = require("./router");

const app = express();
app.use(bodyParser.json());

/* ROUTES */
app.use("/todo", todoRoutes);

app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log('Server Started PORT ==> ', process.env.SERVER_PORT);
});