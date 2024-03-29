const mongoose = require('mongoose')

const BankUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('bank_users', BankUserSchema)