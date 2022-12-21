const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    division: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    upazila: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: {
            values: ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-']
        }
    },
    contact: {
        type: String,
        required: true,
        maxLength: 11
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
})

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;