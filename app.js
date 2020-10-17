const express = require('express'),
    bodyParser = require('body-parser');
    

const app = express();
const port = process.env.PORT || 22000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const parseV1Router = require('./routes/v1/parse')()
app.use('/api/v1/parse', parseV1Router)

const parseV2Router = require('./routes/v2/parse')()
app.use('/api/v2/parse', parseV2Router)

app.get('/', function (req, res) {
    res.status(200).send('Welcome to parse Services!!');
})

// 404 - Resource Not Found Error Handler
app.use(function(req, res, next) {
    console.error(`${req.originalUrl} - Resource Not Found`)
    res.status(404).send({code : 10002, message : `parse-service : ${req.method} ${req.originalUrl} - Resource Not Found`})
    next()
})

// 500 - Intenal Server Error Handler
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({code : 10003, message : err.message})
    next()
})

app.listen(port, function () {
    console.log('parse service is up and listening on PORT :', port);
})
