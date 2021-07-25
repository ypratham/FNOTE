import React, { useState, useEffect } from 'react';
import CreateNote from "./CreateNote";
import Notes from "./Note";
import Header from './Header';
import Footer from './Footer';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNote => {
            return [...prevNote, newNote];
        });
    }

    function deleteNote(noteId) {
        axios({
            method: 'delete',
            url: "/api",
            data: {
                noteId: noteId
            }
        })
            .then(res => {
                setNotes(res.data)

            })
            .catch(err => console.log("Error: " + err));
    }

    useEffect(() => {
        axios
            .get("/api")
            .then(res => {
                setNotes(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [notes]);


    return (
        <div>
            <Header />
            <CreateNote onAdd={addNote} />

            {notes.length > 0 ? notes.map((noteItem, index) => {
                return (<Notes key={index} id={noteItem._id} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />);
            }) : null}

            <Footer />
        </div>
    );
};

export default App;