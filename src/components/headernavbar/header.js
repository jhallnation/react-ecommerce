import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jh_logo from '../../images/jh_logo.png';

class Header extends Component {
  render(){
    return (
      <div className='header'>
        <Link to='/'>
          <img src={jh_logo} className='logo'/>
        </Link>
      </div>
    )
  }
}

export default Header;