import React from "react";
import UserInfor from "./UserInfor";
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

    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;