import React from "react";

class MyComponent extends React.Component {
    state = {
        name    : 'Bao',
        address : 'Da Nang',
        age     : 21
    };

    handleOnChange = (e) => {
        this.setState({
            name    :   e.target.value
        })
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(e) => {this.handleOnSubmit(e)}}>
                    <input type="text" onChange={(e) => {this.handleOnChange(e)}}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;