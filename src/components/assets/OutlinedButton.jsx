import React from 'react';
import { Link } from 'react-router-dom';

const OutlinedButton = (props) => {
    return <Link to={props.link}><button className='outlined-button'>{props.name}</button></Link>
}

export default OutlinedButton;