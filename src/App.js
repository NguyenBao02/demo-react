import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
         Hello World
        <MyComponent></MyComponent>
      </div>
    )
  }
}
export default App;
