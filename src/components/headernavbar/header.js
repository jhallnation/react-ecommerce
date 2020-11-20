import React, { Component } from 'react';
import jh_logo from '../../images/jh_logo.png';

class Header extends Component {
  render(){
    return (
      <div className='header'>
        <img src={jh_logo} className='logo'/>
      </div>
    )
  }
}

export default Header;