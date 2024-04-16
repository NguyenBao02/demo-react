import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    // const [address, setAddress] = useState('Da nang');
    const [age, setAge] = useState('');

    const handleOnChangeName = (e) => {
        setName(e.target.value)
    };

    const handleOnChangeAge = (e) => {
        setAge(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id  : Math.floor((Math.random() * 100) + 1) + '-random',
            name,
            age
        });
    }

    return (
        <div>
            My name is {name} and i'm {age}
            <form onSubmit={(e) => {handleOnSubmit(e)}}>
                <input value={name} type="text" onChange={(e) => {handleOnChangeName(e)}}></input>
                <input value={age} type="text" onChange={(e) => {handleOnChangeAge(e)}}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor