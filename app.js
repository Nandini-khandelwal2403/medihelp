const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connectDB = require('./src/db/connection');
// connection with Database
connectDB();

const Seller = require("./src/db/seller")

// body parser lines
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public'));

require('dotenv').config();
const PORT = process.env.PORT || 3002;

app.post('/api/new', (req, res) => {
    let obj = req.body;
    console.log(obj);

    const seller = new Seller(obj);
    seller.save().then((doc) => {
        res.json(doc);
    })
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/views/form.html')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})


app.listen(PORT, () => {
    console.log(`Express app listening to PORT ${PORT}`);
})