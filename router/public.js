const router = require('express').Router()
const JobController = require('../controllers/jobController')

router.get('/jobs', JobController.getAllPublic)
router.get('/jobs/:id', JobController.getPublicById)

module.exports = router