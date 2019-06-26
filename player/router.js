const { Router } = require('express')
const Player = require('./model')
const router = new Router()
const Team = require('../team/model')

router.get('/player', function (req, res, next) {
  Player.findAll()
    .then(players => {
      res.json(players)
    })
    .catch(err => {
      next(err)
    })
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