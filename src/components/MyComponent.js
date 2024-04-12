import React from "react";

class MyComponent extends React.Component {

    state = {
        name    : 'Bao',
        address : 'Da Nang',
        age     : 21
    };

    handleClick = (event) => {
        this.setState({
            name    : 'Quyen',
            age     : 22,
        })
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;