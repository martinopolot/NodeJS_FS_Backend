const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // id
    // firstName, lastName, address, city, state, zip, email, password

    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
        type: 'string',
        required: true,
    },
    lastName: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    city: {
        type: 'string',
        required: true,
    },
    state: {
        type: 'string',
        required: true,
    },
    zipCode: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
});

model.exports = mongoose.model("User", userSchema);