const express = require('express');
const app = express();

const mongoose = require('mongoose');

// body parser lines
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public'));

require('dotenv').config();
const PORT = process.env.PORT || 3002;

mongoose.connect('mongodb+srv://nandinikh2403:Jaisiyaram@12@cluster0.r6elewd.mongodb.net/?retryWrites=true&w=majority').then(console.log("Connection succesful"));

app.post('/api/new', (req, res) => {
    let obj = req.body;
    console.log(obj);
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