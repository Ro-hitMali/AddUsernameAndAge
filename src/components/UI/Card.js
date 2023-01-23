import React from 'react';
import classes from './Card.module.css'

 //props.children will give a content which inside Card tag.

const Card = (props) => {
   
    return (<div className={`${classes.card} ${props.className}`}> 
    {props.children} 
    </div>
    )
};

export default Card;

// classname should be same as card classname. we are merging internally defined class with our external class.