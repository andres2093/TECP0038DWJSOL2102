const Sequelize = require('sequelize')
const NoteModel = require('./models/notes')

const sequelize = new Sequelize('ligefin', 
  'bedu2021', 'bedu2021ligefin', {
    host: 'mysql-44756-0.cloudclusters.net',
    dialect: 'mysql',
    port: 19779
  })

const Note = NoteModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => console.log("Tablas creadas!!!"))

module.exports = {
  Note
}