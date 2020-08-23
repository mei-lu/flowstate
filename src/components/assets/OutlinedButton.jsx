import React from 'react';

const OutlinedButton = (props) => {
    return <button className={`outlined-button ${props.style}`}>{props.name}</button>
}

export default OutlinedButton;