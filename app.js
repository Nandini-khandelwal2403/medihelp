const mongoose = require('mongoose');
// connection creation and creating new database
mongoose.connect('mongodb+srv://root:<123>@cluster0.cnmxtyv.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true,useFindAndModify: false,userCreateIndex: true}).then(() => console.log("connection successfull....")).catch((err)=> console.log(err));
const express = require('express');
const app = express();

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