import React, { Component } from 'react';
import './app.less';

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
      <h1 className='what'>111111坎坎坷坷扩扩</h1>
    <button onClick={() => this.add()}>增加1</button>
    </div>
  );
  }
}