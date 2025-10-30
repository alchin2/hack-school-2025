const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema(
    {
        option: String,
        count: Number,
    },
    { _id: false }
);

const pollSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        option: {
            type: [optionSchema],
            required: true,
        },
        totalvotes: Number,
    }

);

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;