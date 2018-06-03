/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='logo'><img src='logotipo-billin@2x.png'/></div>
        <div className='title'>Billin code challenge</div>
      </div>
    );
  }
}

export default Header;
