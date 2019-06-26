const express = require('express')
const sequelize = require('./db')
const Team = require('./team/model')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')
const Player = require('./player/model')
const playerRouter = require('./player/router')

const app = express()
const jsonParser = bodyParser.json()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on: ${port}`))

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)