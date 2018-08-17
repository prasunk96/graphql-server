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

module.exports = resolvers;