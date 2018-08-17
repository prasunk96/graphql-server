let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

// const typeDefs = `
// type Query {
//   author(firstName: String, lastName: String): Author
//   allAuthors: [Author]
//   allNotes: [Note]
// }

// type Author {
//   id: Int
//   firstName: String
//   lastName: String
//   posts: [Post]
// }

// type Post {
//   id: Int
//   title: String
//   text: String
//   views: Int
//   author: Author
// }

// type Note {
//   id: Int,
//   text: String,
//   priority: String,
//   checked: Boolean
// }
// `;
const typeDefs = `
type Query {
  allNotes(last: Int): [Note]
}

type Mutation {
  createNote(text: String, priority: String, checked: Boolean): Note
  updateNote(id: Int!, checked: Boolean): Note
  deleteNote(id: Int): Int
}

type Note {
  id: Int,
  text: String,
  priority: String,
  checked: Boolean
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
