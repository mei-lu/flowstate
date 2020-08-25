import React from 'react';
import { Link } from 'react-router-dom';

const SolidButton = (props) => {
    return <Link to={props.link}><button className='solid-button'>{props.name}</button></Link>
}

export default SolidButton;