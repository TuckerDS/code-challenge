/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = { article: props.article };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.article !== this.state.article) {
      this.setState({article: nextProps.article});
    }
  }

  render() {
    let filters = (!this.state.article) ? <div id='filter'><span><a href='#' id='SHOW_ALL'>SHOW ALL</a></span><span><a href='#' id='SHOW_PUBLISHED'>SHOW PUBLISHED</a></span></div> : '';

    return (
      <div className="footer">
        {filters}
        <h1>Tucker</h1>
      </div>
    );
  }
}

export default Footer;
