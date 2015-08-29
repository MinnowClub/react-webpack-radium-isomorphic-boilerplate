import Radium from 'radium';
import React from 'react';
import color from 'color';

@Radium
export default class HelloMessage extends React.Component {
  render () {
    return (
      <h2 style={[styles]}>Yo yo, {this.props.name}</h2>
    );
  }
}

var styles = {
  color: '#0074D9',

  // Adding interactive state couldn't be easier! Add a special key to your
  // style object (:hover, :focus, :active, or @media) with the additional rules.
  ':hover': {
    color: color('#0074D9').lighten(0.2).hexString()
  }
};
