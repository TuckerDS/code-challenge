import { connect } from 'react-redux'
import { getArticle } from '../actions'
import Articles from '../components/Articles/Articles'

const getVisibleTodos = (articles, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_PUBLISHED':
      return todos.filter(t => t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    articles: getArticles(state.articles, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(getArticle(id))
    }
  }
}

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)

export default ArticlesContainer
