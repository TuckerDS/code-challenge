/*jshint esversion: 6*/
/*
 * tipos de acciones
 */
export const SET_ARTICLES = 'SET_ARTICLES'
export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ARTICLE = 'ADD_ARTICLE'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const SET_FILTER = 'SET_FILTER'

/*
 * constantes
 */

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PUBLISHED: 'SHOW_PUBLISHED'
}

/*
 * creadores de acciones
 */

export function getArticles(articles, filter) {
  return { type: GET_ARTICLES }
}

export function setArticles(articles) {
  return { type: SET_ARTICLES, articles }
}

export function getArticle(id) {
  return { type: GET_ARTICLE, id }
}

export function addArticle(article) {
  return { type: ADD_ARTICLE, article }
}

export function updateArticle(id) {
  return { type: UPDATE_ARTICLE, id }
}

export function deleteArticle(id) {
  return { type: DELETE_ARTICLE, id }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}
