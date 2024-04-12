import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers :  [
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
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers : [userObj, ...this.state.listUsers]
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <br />
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;