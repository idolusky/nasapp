const express = require('express')
const app = express()
const api = require('./server/api')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = express.Router()

mongoose.connect('mongodb://localhost/nasa', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

const port = 3555

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})

