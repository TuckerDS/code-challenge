/*jshint esversion: 6*/
import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInputObjectType
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    excerpt: {
      type: GraphQLString
    },
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    published: {
      type: GraphQLBoolean
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  })
});


const articleInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Input user payload',
  fields: () => ({
    author: {
      name: 'author',
      type: GraphQLString
    },
    content: {
      name: 'content',
      type: GraphQLString
    },
    excerpt: {
      name: 'excerpt',
      type: GraphQLString
    },
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    published: {
      name: 'content',
      type: GraphQLBoolean
    },
    tags: {
      name: 'tags',
      type: new GraphQLList(GraphQLString)
    },
    title: {
      name: 'title',
      type: GraphQLString
    }
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve () {
        return db.Article.find();
      },
    },

    article: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve (root, params) {
        return db.Article.findById(params.id);
      }
    }
  }),
});


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addArticle: {
      type: articleType,
      args: {
        article: {
          name: 'article',
          type: new GraphQLNonNull(articleInputType)
        }
      },
      resolve (root, params) {
        const article = new db.Article();
        return article.create(params.article);
      }
    },
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
