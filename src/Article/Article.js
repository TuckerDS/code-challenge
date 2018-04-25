/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  // definition
  constructor(props) {
    console.log('article',props.article);
    super(props);
    this.state = { article: props.article };
  }


  render() {
    return (
      <div className="article" id={this.state.article.id}>
        <h3>{this.state.article.title}</h3>
        <div>{this.state.article.excerpt}</div>
        <h4>{this.state.article.author}</h4>
      </div>
    );
  }
}

export default Article;
