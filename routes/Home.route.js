const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Note = require("../models/note.model.js")

router.get("/", (req, res) => {
    Note.find({})
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
    const note = req.body;
    const newNote = new Note(note);

    newNote.save()
        .then(() => res.json(newNote))
        .catch(err => res.status(400).json("Error: " + err));
});

router.delete("/", (req, res) => {
    console.log(req.body)
    const noteId = req.body.noteId;
    Note.findOneAndDelete({ _id: noteId }, (err) => {
        !err ? console.log("Deleted") : console.log(err);
    }).then(notes => res.json(notes)).catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;