/*jshint esversion: 6*/
import React, { Component } from 'react';
// import request from './request';
// import { ARTICLES_QUERY } from './queries';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Articles from './Articles/Articles';
import './App.css';


class App extends Component {
  
  // Renders
  render() {
    return (
      <div className="App">
        <Header/>
        <Articles/>
        <Footer/>
      </div>
    );
  }
}

export default App;
