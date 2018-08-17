let { Note } = require('./connectors');

const resolvers = {
  Query: {
    allNotes(_, args) {
      if(args.last) {
        return Note.findAll({ limit: args.last });
      } else {
        return Note.findAll();
      }
    }
  },

  Mutation: {
    createNote(_, args) {
      Note.create({
        text: args.text,
        priority: args.priority,
        checked: args.checked
      }).then(newNote => newNote)
    },
    updateNote(_, args) {
      Note.update(
        { checked: args.checked },
        { where: { id: args.id }}
    ).then(() => {})
    },
    deleteNote(_, args) {
      Note.destroy(
        { where: { id: args.id } }
      ).then(deletedRows => deletedRows)
    }
  }
};
// const resolvers = {
//   Query: {
//     author(_, args) {
//       return Author.find({ where: args });
//     },
//     allAuthors(_, args) {
//       return Author.findAll();
//     },
//     allNotes(_, args) {
//       return Note.findAll();
//     }
//   },
//   Author: {
//     posts(author) {
//       return author.getPosts();
//     }
//   },
//   Post: {
//     author(post) {
//       return post.getAuthor();
//     },
//     views(post) {
//       return View.findOne({ postId: post.id }).then(view => view.views);
//     }
//   }
// };

module.exports = resolvers;