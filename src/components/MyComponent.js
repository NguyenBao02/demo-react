import React from "react";

class MyComponent extends React.Component {

    state = {
        name    : 'Bao',
        address : 'Da Nang',
        age     : 21
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;