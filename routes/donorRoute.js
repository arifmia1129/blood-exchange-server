const router = require('express').Router();
const donorControllers = require('../controllers/donorController');

router.route('/')
    .post(donorControllers.addDonor)

module.exports = router;