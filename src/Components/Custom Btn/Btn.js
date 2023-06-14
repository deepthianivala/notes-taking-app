import React from 'react'
import "./Btn.css";

function Btn({ title, MycreateNote }) {
    return (
        <div className='btnContainer' id="btnContainer_id" >
            <button className="btnReal" onClick={MycreateNote} >{title}</button>
        </div>
    )
}

export default Btn