import React from 'react';
import './Notesgrp.css';
import Notes from '../Notes/Notes';


const Notesgrp = ({ OurNotes, setIsModified, setCurrentNote }) => {

    console.log(OurNotes);
    return (
        <div className='NotesgrpContainer'>
            {/* <Notes /> */}
            {OurNotes.map((n) => {
                return <Notes setCurrentNote={setCurrentNote} setIsModified={setIsModified} note={n} />
            })
            }
        </div>
    )

}

export default Notesgrp;
