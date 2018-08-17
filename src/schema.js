let { makeExecutableSchema, addMockFunctionsToSchema } = require("graphql-tools");
let resolvers = require("./resolvers");

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
