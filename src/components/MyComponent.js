import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            {
                id      : 1,
                name    : 'Hoi Dan IT',
                age     : 16
            },
            {
                id      : 2,
                name    : 'Bao',
                age     : 21
            },
            {
                id      : 3,
                name    : 'Quyen',
                age     : 69
            },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;

        listUsersClone = listUsersClone.filter(item => item.id !== userId);

        setListUsers(listUsersClone)
    }

    return (
        <>
            <div className="a">
                <AddUserInfor handleAddNewUser={handleAddNewUser}/>
                <br />
                <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}/>
            </div>

            <div className="b">
                
            </div>
        </>
    );
}

export default MyComponent;