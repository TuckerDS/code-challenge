/*jshint esversion: 6*/
import React, { Component } from 'react';
import request from './../../request';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Articles from '../Articles/Articles';
import reducers from '../../reducers';
import './App.css';

import Article from '../Article/Article';



import { ARTICLES_QUERY } from '../../queries';
import { DETAIL_ARTICLE_QUERY} from '../../queries';
import { ADD_ARTICLE_QUERY } from '../../queries';

import { Filters } from '../../actions'
import { createStore, applyMiddleware } from 'redux';


// const initialState = {
//   Filter: Filters.SHOW_ALL,
//   articles: []
// }
//
// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//   return state
// }



class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = { articles: [], article: null };
  }

  selectArticle(id) {
    request(DETAIL_ARTICLE_QUERY(id)).then(response => {
      this.setState({ article: response.data.article });
    });
  }

  detailClick(event) {
    console.log(event);
    let state = event.state;
    let article;
    switch (event.type) {
      case 'save':
        article = {
          title: state.title,
          author: state.author,
          content: state.content,
          excerpt: state.excerpt,
          published: state.published,
        };
        console.log('articleParam', article);
        request(ADD_ARTICLE_QUERY(article)).then(response => {
          console.log('response',response.data.articles);
        });
        break;
      case 'add':
        article = {
          title: state.title,
          author: state.author,
          content: state.content,
          excerpt: state.excerpt,
          published: state.published,
        };
        console.log('articleParam', article);
        request(ADD_ARTICLE_QUERY(article)).then(response => {
          console.log('response',response.data.articles);
        });

        break;
      default:
    }
    this.setState({article:null});
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }
  //<Article key={article.id.toString()} article={article} onClick={this.getArticleDetail.bind(this)}/>

  // Renders
  render() {
    let article = this.state.article;
    let content = (article) ? <Article article={article} onClick={this.detailClick.bind(this)}/>
                            : content = <Articles onClick={this.selectArticle.bind(this)}/>;
    return (
      <div className="App">
        <Header/>
        {content}
        <Footer article={article}/>
      </div>
    );
  }
}

export default App;
