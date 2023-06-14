import React from 'react'
import Heading from '../Heading/Heading'
import Btn from '../Custom Btn/Btn';
import './Leftpanel.css'
import Notesgrp from '../Notes Grp/Notesgrp';

const Leftpanel = ({ MyNotes, createNote, setIsModified, setCurrentNote }) => {
  return (
    <div className='Container'>
      <Heading heading="Pocket Notes" />
      <Btn MycreateNote={createNote} title=" + Create Notes group" />
      <Notesgrp setCurrentNote={setCurrentNote} OurNotes={MyNotes} setIsModified={setIsModified} />
    </div>
  );
}

export default Leftpanel;