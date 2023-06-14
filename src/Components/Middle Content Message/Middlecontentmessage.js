import React from 'react';
import './Middlecontentmessage.css';

function Middlecontentmessage({ data }) {

    return (
        <div className='midContentMain'>
            <div className='midContentTime'>time</div>
            <div className='midContentNotes'>{data}</div>
        </div>
    )
}

export default Middlecontentmessage