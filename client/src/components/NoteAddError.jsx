import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Zoom from '@material-ui/core/Zoom';

function NoteAddError(props) {
    return props.trigger ? (
        <div className="popUp">
            <Zoom in={true}>
                <div className="addPopup">
                    <ErrorOutlineIcon style={{ fontSize: 40 }} className="errorIcon" />
                    <h1>Note is empty</h1>

                    <Button onClick={() => props.setTrigger(false)} variant="contained" color="primary" endIcon={<DoneIcon />}>Okay</Button>
                </div>
            </Zoom>
        </div>
    ) : "";
}

export default NoteAddError;