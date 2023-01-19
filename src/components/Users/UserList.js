import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const UserList = (props) => {
    return <Card className = {classes.users} >
        <ul>
        {props.users.map(user => 
        <li key={user.id} >
            {user.name} ({user.age} years old) 
        </li>
        )}
    </ul>
    </Card>
    //here users is an array of user objects where every object have a name and age property.
}

export default UserList;