const Donor = require("../models/donorModel")

exports.addDonor = async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();
        res.status(201).json({
            success: true,
            message: 'Successfully add donor'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Couldn't add donor",
            error: error.message
        })
    }
}