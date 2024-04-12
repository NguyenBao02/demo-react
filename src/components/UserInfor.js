import React from "react";

class UserInfor extends React.Component {
    state = {
        name    : 'Bao',
        address : 'Da Nang',
        age     : 21
    };

    handleOnChangeName = (e) => {
        this.setState({
            name    :   e.target.value
        })
    };

    handleOnChangeAge = (e) => {
        this.setState({
            age    :   e.target.value
        })
    };

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(e) => {this.handleOnSubmit(e)}}>
                    <input value={this.state.name} type="text" onChange={(e) => {this.handleOnChangeName(e)}}></input>
                    <input value={this.state.age} type="text" onChange={(e) => {this.handleOnChangeAge(e)}}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor