/*eslint-disable*/
import React, { Component } from 'react';
import './app.less';
import a from './images/no.png'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  add () {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
      <div className='what '>
        <img src={a} alt="wo" />
      </div>
      <div className='what what2 '>111111坎坎坷坷扩扩</div>
    <button onClick={() => this.add()}>增加1</button>
    </div>
  );
  }
}