import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;

//{...this.props.children}