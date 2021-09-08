import React, { Component } from 'react';
import Display from '../../Display.jsx';

const bgcolor = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  '#330099',
  'violet'
];

export default class RandomColor extends Component {
  state = {
    bgcolor: ''
  }

  changeColor = () => {
    const rando =  Math.floor(Math.random() * bgcolor.length);
    this.setState({ bgcolor: bgcolor[rando] });
  }

  componentDidMount() {
    setInterval(() => this.changeColor(), 1000);
  }

  render() {
    return <div><Display bgcolor={this.state.bgcolor}/></div>;
  }
}
