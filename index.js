const express = require('express')
const app = express()
const importData = require('./manutd.json')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Manchester United Players database")
})

app.get('/players', (req, res) => {
    res.header("Content-Type",'application/json')
    res.send(JSON.stringify(importData))
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})