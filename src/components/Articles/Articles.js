/*jshint esversion: 6*/
import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './Articles.css';

class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = { articles: [] };
    this.onClick = props.onClick;
  }

  // actions
  getArticleDetail(event) {
    this.onClick(event.currentTarget.id);
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  render() {
    let articles = this.state.articles;
    let article = this.state.article;

    if (articles.length > 0) {
      const articlesList = articles.map((article, i) => {

        let id = article.id.toString();

        return (
          <div key={id} className="articleContainer">
            <div key={id} className="articleElement" id={id} onClick={this.getArticleDetail.bind(this)}>
              <h2>{article.title}</h2>
              <div>{article.excerpt}</div>
              <h4>{article.author}</h4>
            </div>
          </div>
        );

      });

      return (
        <div className="articles">
          {articlesList}
        </div>
      );

    } else return <p className="text-center">Cargando Artículos...</p>
  }
}

export default Articles;
