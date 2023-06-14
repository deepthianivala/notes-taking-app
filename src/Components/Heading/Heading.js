import React from 'react';
import "./Heading.css";

const Heading = ({ heading }) => {
    return (
        <div className='header'>{heading}</div> // transfer from parent to child

    )
}

export default Heading;