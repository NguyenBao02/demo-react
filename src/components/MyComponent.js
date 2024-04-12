import React from "react";

class MyComponent extends React.Component {

    state = {
        name    : 'Bao',
        address : 'Da Nang',
        age     : 21
    };

    handleClick() {
        console.log('My name is');
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;