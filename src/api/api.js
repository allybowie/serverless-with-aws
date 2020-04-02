const express = require("express")
const http = require("serverless-http")

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "OK"
    })
})

app.get('/hellothere', (req, res) => {
    res.json({
        message: "General Kenobi!"
    })
})
module.exports.handler = http(app)