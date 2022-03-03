const express = require('express');
const cors = require('cors');
require('./models/connect')

var app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const hostname = '127.0.0.1';
const port = 8080;

app.use(cors());

require('./routes/routes')(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})