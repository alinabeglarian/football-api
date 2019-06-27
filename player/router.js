const { Router } = require('express')
const Player = require('./model')
const router = new Router()
const Team = require('../team/model')


router.get('/players', (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0

  Promise.all([
    Player.count(),
    Player.findAll({ limit, offset })
  ])
    .then(([total, players]) => {
      res.send({
        players, total
      })
    })
    .catch(error => next(error))
})

router.post('/player', function (req, res, next) {
  Player
    .create(req.body)
    .then(player => res.status(201).json(player))
    .catch(err => {
      next(err)
    })
})

router.get('/player/:id', function (req, res, next) {
  const id = req.params.id
  Player.findByPk(id, { include: [Team] })
    .then(players => {
      res.json(players)
    })
    .catch(err => {
      next(err)
    })
})

router.put('/player/:id', function (req, res, next) {
  const id = req.params.id
  Player.findByPk(id, { include: [Team] })
    .then(player => player.update(req.body))
    .then(player => res.json(player))
    .catch(err => {
      next(err)
    })
})

module.exports = router