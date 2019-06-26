const { Router } = require('express')
const Team = require('./model')
const router = new Router()

router.get('/team', function (req, res, next) {
  Team.findAll()
    .then(teams => {
      res.json(teams)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/team', function (req, res, next) {
  Team
    .create(req.body)
    .then(team => res.status(201).json(team))
    .catch(err => {
      next(err)
    })
})

module.exports = router