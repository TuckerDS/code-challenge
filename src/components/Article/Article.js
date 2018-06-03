/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Article.css';
import request from './../../request';
import { DETAIL_ARTICLE_QUERY} from '../../queries';

class Article extends Component {

  // definition

  constructor(props) {
    super(props);
    this.state = { article: props.article, edit: false };
    this.onClick = React.PropTypes.func.isRequired;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Handlers

  handleClick(event) {
    switch (event.target.id) {
      case 'edit':
        this.setState({edit:true}) ;
        break;
      case 'back':
        //this.props.onClick.bind(null, this.state.article.id)
        console.log('EVENT', event.target);
        break;
      case 'save':
        break;
      default:
    }
  }

  handleChange(event) {
    let article = this.state.article;
    article[event.target.id] = event.target.value;
    // Auto excerpt
    if (event.target.id == 'content') article.excerpt = (event.target.value.length > 350) ? event.target.value.substring(0, 349) : event.target.value;
    this.setState({article: article});
  }

  render() {
    let a = this.state.article;
    let checked = this.state.article.publised ? 'checked' : '';
    let title = this.state.edit ? <input id='title' type='text' value={a.title} onChange={this.handleChange} placeholder="Title"/> : <span id='title'>{a.title}</span>;
    let author = this.state.edit ? <input id='author' type='text' value={a.author} onChange={this.handleChange} placeholder="Author"/> : <span id='author'>{a.author}</span>;
    let content = this.state.edit ? <textarea id='content' value={a.content} onChange={this.handleChange} placeholder="Content"/> : <p>{a.content}</p>;
    let button = this.state.edit ? <button id='save' onClick={this.props.onClick.bind(null, {'type': 'save', 'state': this.state.article})}>Save</button> : <button id='edit' onClick={this.handleClick}>Edit</button>;
    return (
      <div id='detailContainer'>
        <div className="article" id={this.state.article.id}>
          <div>{title}</div>
          <div>{content}</div>
          <div>{author}</div>
          <div id='controls'>
            {button}
            <button id='back' onClick={this.props.onClick.bind(this, {'type': 'back', 'state': this.state.article})}>Back</button>
            <span id='check'><label>Published</label><input type="checkbox" name="published" id="published" checked={checked}/></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
