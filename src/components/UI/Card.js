import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
    //props.children will give a content which inside Card tag.
    return <div className={`${classes.card} ${props.className}`}> {props.children} </div>;
}

// classname should be same as card classname. we are merging internally defined class with our external class.
export default Card;