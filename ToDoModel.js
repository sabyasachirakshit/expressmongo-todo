const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addedBy: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Todo", todoSchema);