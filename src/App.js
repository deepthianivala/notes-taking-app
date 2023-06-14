
import { useEffect, useState } from 'react';
import './App.css';
import Leftpanel from './Components/Left Panel/Leftpanel';
import RightPanel from './Components/Right Panel/RightPanel';

function App() {
  // responsible for right panel modification
  const [isModified, setIsModified] = useState(false)
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    // // When the current Note will change this will run
    // console.log('Current Note Changed')
    // let newNote = [...notes, currentNote];
    // setNotes(newNote);
  }, [currentNote])

  const handleCreateButton = () => {
    const newNote = {
      id: 1,
      name: 'TempData',
      // time: Date.now(),
      Data: [
        'Temp',
        'Temp',
        'Temp',

      ]
    }

    const newList = [...notes, newNote];
    setNotes(newList);
  }

  const [notes, setNotes] = useState([
    {
      id: 1,
      name: 'Bishal Changder',
      Data: [
        'JBDSFBSFKJBFSD',
        'JBDSFBSFKJBFSD',
        'JBDSFBSFKJBFSD',
      ]
    },
    {
      id: 2,
      name: 'Deepthi Anivala',
      Data: [
        'JBDSFBSFKJBFSD123456676',
        'JBDSFBSFKJBFSD98798833r',
        'JBDSFBSFKJBFSDasdfkb dfg ukygudgkj',
      ]
    }
  ]);



  const handleNoteClick = (id) => {
    console.log(id);
  }

  return (
    <div className="App">

      <Leftpanel setCurrentNote={setCurrentNote} setIsModified={setIsModified} MyNotes={notes} noteClick={handleNoteClick} createNote={handleCreateButton} />
      <RightPanel setCurrentNote={setCurrentNote} isModified={isModified} currentNote={currentNote} />

    </div>
  );
}



export default App;
