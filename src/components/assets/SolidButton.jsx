import React from 'react';

const SolidButton = (props) => {
    return <button className={`solid-button ${props.style}`}>{props.name}</button>
}

export default SolidButton;