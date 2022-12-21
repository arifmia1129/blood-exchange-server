const router = require('express').Router();
const donorControllers = require('../controllers/donorController');

router.route('/')
    .post(donorControllers.addDonor)
    .get(donorControllers.getDonors)


router.route('/:id')
    .get(donorControllers.getDonorById)

module.exports = router;