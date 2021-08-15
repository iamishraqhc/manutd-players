const express = require('express')
const app = express()
const importData = require('./manutd.json')
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

app.get('/', (req, res) => {
    res.send("Manchester United Players database")
})

app.get('/players', (req, res) => {
    res.send(importData)
})

app.get('/goalkeepers', (req, res) => {
    res.send(importData.goalkeepers)
})

app.get('/defenders', (req, res) => {
    res.send(importData.defenders)
})

app.get('/midfielders', (req, res) => {
    res.send(importData.midfielders)
})

app.get('/forwards', (req, res) => {
    res.send(importData.forwards)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})
