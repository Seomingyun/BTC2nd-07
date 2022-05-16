require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const {PORT, DB_URI} = process.env;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', require('./routes/index'));

mongoose
    .connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB is connecting...')
        app.listen(PORT || 4000, () => {
            console.log(`Server is listening in ${PORT || 4000} port...`)
        })
    })
    .catch(e => console.log(e));


module.exports = app;