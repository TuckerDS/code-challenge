/*jshint esversion: 6*/
import * as actions from './actions.js';

const articles = (state = { articles: [], filter: 'SHOW_ALL' }, actions) => {

  switch (actions.type) {
    case actions.SET_FILTER:
      return Object.assign({}, state, {
       filter: actions.filter
      })

    case actions.SET_ARTICLES:
      return Object.assign({}, state, {articles: actions.articles})

    case actions.GET_ARTICLES:
      return state

    case actions.GET_ARTICLE:
      return Object.assign({}, state).articles.push(actions.article)

    case actions.ADD_ARTICLE:
      return Object.assign({}, state).articles.push(actions.article)

    case actions.REMOVE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.map((article, id) => {
          if (id !== actions.id) {
            return Object.assign({}, article, {
              completed: true
            })
          }
          return article
        })
      });

    case actions.UPDATE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.map((article, id) => {
          if (id === actions.id) {
            return Object.assign({}, article, {
              completed: true
            })
          }
          return article
        })
      });
    default:
      return state;
  }
};


export default articles;
