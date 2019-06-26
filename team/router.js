const { Router } = require('express')
const Team = require('./model')
const router = new Router()

router.get('/team', function (req, res, next) {
  Team.findAll()
    .then(teams => {
      res.json({ teams: teams })
    })
    .catch(err => {
      next.status(500).json({
        message: 'Something went wrong',
        error: err
      })
    })
})

module.exports = router