import React, {useState} from "react";
import Card from '../UI/Card.js'
import classes from './AddUser.module.css';
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length ===0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid name and age(non-empy values)"
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"Please enter a valid age(>0)."
            })
            return;
        }
        //here + sign is to ensure to browser that this is number only.
        //console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError();
    }
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>  
        <form onSubmit={addUserHandler} >
            <label htmlFor="username" >Username:</label>
            <input id="username" type='text' value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor="age" >Age (Years)</label>
            <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit" >Add User</Button>
        </form>
        </Card>
        </div>
        // input is used in css file. and props.
    );
}

export default AddUser;