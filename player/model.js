const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define(
  'player', 
  {
    name: {
      type: Sequelize.STRING,
      field: 'player_name',
    },
    number: {
      type: Sequelize.INTEGER,
      field: 'player_number'
    }
  },
  { tableName: 'football_players',
    timestamps: false
  },
)

module.exports = Player