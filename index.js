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
    if (importData.players[0].position === 'Goalkeeper') {
        res.send(importData.players[0].members)
    }
})

app.get('/defenders', (req, res) => {
    if (importData.players[1].position === 'Defender') {
        res.send(importData.players[1].members)
    }
})

app.get('/midfielders', (req, res) => {
    if (importData.players[2].position === 'Midfielder') {
        res.send(importData.players[2].members)
    }
})

app.get('/forwards', (req, res) => {
    if (importData.players[3].position === 'Forward') {
        res.send(importData.players[3].members)
    }
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})
