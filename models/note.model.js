const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteScheme = new Schema({
    title: { type: String },
    content: { type: String }
});

const Note = mongoose.model("Note", noteScheme);

module.exports = Note;