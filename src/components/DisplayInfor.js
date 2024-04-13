import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
    state = {
        isShowListUser  : true
    };

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            document.title = "Test"
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.listUsers !== prevProps.listUsers) {
            if(this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser  : !this.state.isShowListUser
        })
    }
 
    render () {
        console.log('render');
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => {this.handleShowHide()}}> {this.state.isShowListUser ? 'Hide List User' : 'Show List User'}</span>
                </div>

                {this.state.isShowListUser && 
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>

                                    <div>
                                        <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        );
    }
}

export default DisplayInfor