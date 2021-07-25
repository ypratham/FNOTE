import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function handleClick() {
        return props.onDelete(props.id);
    }

    return (

        <div className="note">

            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <DeleteIcon style={{ fontSize: 30 }} type="submit" className="deleteIcon" onClick={handleClick} />

        </div>
    )
};

export default Note;