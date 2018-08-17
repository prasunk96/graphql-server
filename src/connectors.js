let Sequelize = require('sequelize');
let casual = require('casual');
let _ = require('lodash');

const db = new Sequelize('note', null, null, {
  dialect: 'sqlite',
  storage: './note.sqlite',
});

// const AuthorModel = db.define('author', {
//   firstName: { type: Sequelize.STRING },
//   lastName: { type: Sequelize.STRING },
// });

// const PostModel = db.define('post', {
//   title: { type: Sequelize.STRING },
//   text: { type: Sequelize.STRING },
// });

const NoteModel = db.define('note', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  text: { type: Sequelize.STRING },
  checked: { type: Sequelize.BOOLEAN },
  priority: { type: Sequelize.STRING }
});



// AuthorModel.hasMany(PostModel);
// PostModel.belongsTo(AuthorModel);

// casual.seed(88);
// db.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return NoteModel.create({
//       text: casual.sentence,
//       checked: false,
//       priority: "Low"
//     })
//   });
// });

// const Author = db.models.author;
// const Post = db.models.post;
const Note = db.models.note;

module.exports = { Note };