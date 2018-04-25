/*jshint esversion: 6*/
import React, { Component } from 'react';
import request from './../request';
import { ARTICLES_QUERY } from './../queries';
import './Articles.css';
import Article from './../Article/Article';


class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
      console.log('state',this.state);
    });
  }


  // componentDidUpdate() {
  //   console.log("ALBUM"+ this.props.album);
  //   const URL = 'http://jsonplaceholder.typicode.com/photos?albumId=' + this.props.album;
  //   fetch(URL).then(respuesta => respuesta.json())
  //     .then(datos => {
  //       var picturesArray = [];
  //       datos.forEach(picture => {
  //         picturesArray.push([picture.title, picture.thumbnailUrl, picture.url]);
  //       });
  //       console.log(picturesArray);
  //       this.setState({pictures: picturesArray});
  //     })
  //     .catch((error) => console.log(error));
  // }

  render() {
    let articles = this.state.articles;
    console.log('articles', articles);
    if (articles.length > 0) {
      const articlesList = articles.map((article, i) => {
        console.log('ARTICLE BUCLE', article);
        return (
          <Article key={article.id.toString()} article={article}/>
          // <div className="article" key={i}>
          // <img src={article[1]} alt={article[0]} />
          // </div>
        );
      });

      return (
        <div className="articles">
            { articlesList }
        </div>
      );
    } else {
      return <p className="text-center">Cargando Artículos...</p>
    }
  }

}

export default Articles;
