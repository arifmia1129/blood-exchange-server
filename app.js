const express = require('express');
const cors = require('cors');

const donorRouter = require('./routes/donorRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/donor', donorRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    })
})

module.exports = app;