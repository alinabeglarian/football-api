const { Router } = require('express')
const Team = require('./model')
const router = new Router()


router.get('/team', (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0

  Promise.all([
    Team.count(),
    Team.findAll({ limit, offset })
  ])
    .then(([total, teams]) => {
      res.send({
        teams, total
      })
    })
    .catch(error => next(error))
})


router.post('/team', function (req, res, next) {
  Team
    .create(req.body)
    .then(team => res.status(201).json(team))
    .catch(err => {
      next(err)
    })
})

router.get('/team/:id', function (req, res, next) {
  const id = req.params.id
  Team.findByPk(id)
    .then(teams => {
      res.json(teams)
    })
    .catch(err => {
      next(err)
    })
})

router.put('/team/:id', function (req, res, next) {
  const id = req.params.id
  Team.findByPk(id)
    .then(team => team.update(req.body))
    .then(team => res.json(team))
    .catch(err => {
      next(err)
    })
})

module.exports = router