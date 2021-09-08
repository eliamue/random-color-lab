import React, { Component } from 'react';
import Display from '../../Display.jsx';

const bgcolor = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  '#330099',
  'violet',
];

export default class RandomColor extends Component {
  state = {
    bgcolor: '',
  };

  changeColor = () => {
    const rando = Math.floor(Math.random() * bgcolor.length);
    if(bgcolor[rando] === this.state.bgcolor) {
      this.setState({
        bgcolor:
          'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)',
      });
    } else {
      this.setState({ bgcolor: bgcolor[rando] });
    }
  };

  componentDidMount() {
    setInterval(() => this.changeColor(), 1000);
  }

  render() {
    return (
      <div>
        <Display bgcolor={this.state.bgcolor} />
      </div>
    );
  }
}
