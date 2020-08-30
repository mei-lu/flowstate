import React from 'react';

const HeroSection = (props) => {
    return (
        <div className='hero-section' style={props.reverse ? {flexDirection: 'row-reverse'} : null}>
            <div>
                <div className='hero-heading'>{props.heading}</div>
                <div className='hero-body'>
                    <div>{props.body}</div>
                    <div>{props.action ? props.action : null}</div>
                </div>
            </div>
            <div className='hero-image'>{props.image}</div>
        </div>
    );
}

export default HeroSection;
