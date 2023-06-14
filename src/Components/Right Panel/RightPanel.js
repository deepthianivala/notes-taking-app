import React from 'react'
import Middlecontent from '../Middle Content/Middlecontent'
import pocket_notes from '../Assets/pocket_notes.png';
import encryption from '../Assets/encryption.png';
import NoteContent from '../NoteContent/NoteContent';
import './RightPanel.css'

function RightPanel({ setCurrentNote, isModified, currentNote }) {

    console.log(currentNote);

    return (
        < div className='rightSplit' >
            {
                (!isModified) ? <><div className='pocket_img_Container'>
                    <img className='pocket_img' alt='pocket img' src={pocket_notes} />
                </div>
                    <Middlecontent />
                    <div className='LockImageContainer'>
                        <img className='encrypt_img' alt='encrypt img' src={encryption} />
                        <div className='tagline-3'>end-to-end encrypted</div>
                    </div></> : <NoteContent setCurrentNote={setCurrentNote} currentNote={currentNote} />
            }

        </div >
    )
}

export default RightPanel