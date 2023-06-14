import React, { useEffect, useState } from "react";
import './NoteContent.css';
import Middlecontentmessage from '../Middle Content Message/Middlecontentmessage'
import enterBtn from '../Assets/enterBtn.png';

function NoteContent({ setCurrentNote, currentNote }) {

    const [textBoxData, setTextBoxData] = useState('');

    const handleOnChange = (e) => {
        let wordss = e.target.value;
        setTextBoxData(wordss);
    }

    useEffect(() => {

    }, [setTextBoxData])

    const HandleSend = (setCurrentNote, currentNote) => {
        let newArray = [...currentNote.Data, textBoxData];
        currentNote['Data'] = newArray;
        let newCurrentNote = currentNote;
        setCurrentNote(newCurrentNote);  // This should re render the screen
        setTextBoxData('')
    }



    var word = "";
    if (currentNote.name.split(' ').length > 1) {
        let initial = currentNote.name.split(" ")[0][0];
        let final = currentNote.name.split(" ")[1][0];
        word = initial + final;
    } else {
        word = currentNote.name[0];
    }


    return (
        <div className="mainContainer">
            <div className="topHeader">{word} {currentNote.name}</div>
            <div className="middleContent">
                {
                    currentNote.Data.map((data) => {
                        return <Middlecontentmessage data={data} />

                    })
                }

            </div>
            <div className="bottomBox">
                <div className="textAreaContainer">
                    <textarea value={textBoxData} onChange={(e) => handleOnChange(e)} className="textBox"></textarea>
                    <div onClick={() => HandleSend(setCurrentNote, currentNote)} className="enterBtn">
                        <img className="enterBtnImg" src={enterBtn} />
                    </div>
                </div>

            </div>
        </div>

    );
}
export default NoteContent