import React from 'react';
import Navigation from '../components/navigation/Navigation';

const AppWrapper = (props) => {
    return <div>
        <Navigation />
        {props.children}
    </div>
}

export default AppWrapper;