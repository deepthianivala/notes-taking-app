import React from 'react'
import './Notes.css';

function Notes({ note, setIsModified, setCurrentNote }) {
    // console.log("Note : ", note.name.split(" ")[0][0]
    var word = "";
    if (note.name.split(' ').length > 1) {
        let initial = note.name.split(" ")[0][0];
        let final = note.name.split(" ")[1][0];
        word = initial + final;
    } else {
        word = note.name[0];
    }

    const HandleClick = (note) => {
        setIsModified(true)
        setCurrentNote(note)

    }

    return (

        <div onClick={() => HandleClick(note)} className='noteContainer'>
            <div className='iconContainer'>
                {word}

            </div>
            <div className='noteNameContainer'>
                {note.name}
            </div>
        </div>

    )
}

export default Notes