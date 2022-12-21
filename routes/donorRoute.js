const router = require('express').Router();
const donorControllers = require('../controllers/donorController');

router.route('/')
    .post(donorControllers.addDonor)
    .get(donorControllers.getDonors)


router.route('/:id')
    .get(donorControllers.getDonorById)
    .delete(donorControllers.deleteDonorById)
    .put(donorControllers.updateDonorById)

module.exports = router;