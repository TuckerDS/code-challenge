export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;


export const DETAIL_ARTICLE_QUERY = (id) => `{
  article(id:"${id}") {
    author
    content
    excerpt
    id
    title
    published
  }
}`;

export const ADD_ARTICLE_QUERY = (article) => `mutation {
  addArticle(article:"${article}") {
    author
    content
    excerpt
    id
    title
    published
  }
}`;

export const UPDATE_ARTICLE_QUERY = (id, title) => `mutation {
  updateArticle(id:"${id}" title:"${title}") {
    author
    excerpt
    content
    published
    tags
    title
    id
  }
}`;
