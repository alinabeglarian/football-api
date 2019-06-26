const express = require('express')
const app = express()
const sequelize = require('./db')

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on: ${port}`))

