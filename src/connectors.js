let Sequelize = require('sequelize');
let casual = require('casual');
let _ = require('lodash');

const db = new Sequelize('note', null, null, {
  dialect: 'sqlite',
  storage: './note.sqlite',
});

const NoteModel = db.define('note', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  text: { type: Sequelize.STRING },
  checked: { type: Sequelize.BOOLEAN },
  priority: { type: Sequelize.STRING }
});

// It is mandatory to uncomment this block before running the app for the first time.
/*casual.seed(88);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return NoteModel.create({
      text: casual.sentence,
      checked: false,
      priority: "Low"
    })
  });
});
*/

const Note = db.models.note;

module.exports = { Note };