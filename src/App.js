/*jshint esversion: 6*/
import React, { Component } from 'react';
// import request from './request';
// import { ARTICLES_QUERY } from './queries';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Articles from './Articles/Articles';
import './App.css';


class App extends Component {

  // definition
  constructor(props) {
    super(props);
    console.log('props', props);
    // this.state = {
    //   articles: [],
    // };
  }
  //
  // // lifecycle
  // componentWillMount() {
  //   request(ARTICLES_QUERY).then(response => {
  //     this.setState({ articles: response.data.articles });
  //   });
  // }

  // Renders
  render() {
    // let articles = this.state.articles;
    // if (articles.length > 0) {
    //  // <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
      return (
        <div className="App">
          <Header/>
          <Articles/>
          <Footer/>
        </div>
      );
    // } else {
    //   return <p className="text-center">Cargando Artículos...</p>
    // }
  }
}

export default App;
