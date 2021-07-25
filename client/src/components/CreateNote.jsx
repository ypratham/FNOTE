import React, { useState } from "react";
import 'material-icons/iconfont/material-icons.css';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ErrorCard from './NoteAddError';
import axios from "axios";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [buttonClick, setButtonClick] = useState(false)

    const [isExpand, setIsExpand] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            setButtonClick(false);
            return {
                ...prevNote,
                [name]: value
            }
        });
    }


    function submitNote(event) {
        event.preventDefault();

        if (note.title !== "" && note.content !== "") {
            setNote({
                title: "",
                content: ""
            })

            console.log(note);
            const newNote = {
                title: note.title,
                content: note.content
            }
            console.log(newNote);

            axios
                .post("/api", newNote)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                });

            setButtonClick(false);
        } else if (note.title === "" || note.content === "") {
            return setButtonClick(true);
        }
    }

    function handleClick() {
        setIsExpand(true);
    }
    function setTrigger(stat) {
        setButtonClick(stat);
    }

    return (
        <div className="createNote">
            <form action="/" method="post">
                {isExpand ? <input name="title" onChange={handleChange} placeholder="Title" value={note.title} autoComplete="off" /> : null}

                <textarea onClick={handleClick} name="content" onChange={handleChange} placeholder="Take a note..." rows={isExpand ? 3 : 1} value={note.content} />


                <Zoom in={isExpand ? true : false}>
                    <Fab className="addButton" type="submit" onClick={submitNote} >
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>

            <ErrorCard trigger={buttonClick} setTrigger={setTrigger} />
        </div>
    );
}

export default CreateArea;
