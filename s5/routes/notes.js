const express = require("express")
const router = express.Router()
const { Note } = require('../sequelize')
const { Op } = require('sequelize')

// DUMMY
// const notes = [
//   {
//     id: 1,
//     title: "Nota dummy",
//     content: "Dummy nota"
//   }
// ]

// router.get('/', (req, res)=> {
//   return res.json(notes)
// })

// router.post('/', (req, res) => {
//   return res.json({ message: 'Creado!!!' })
// })

// router.put('/:id', (req, res) => {
//   return res.json({ message: 'Actualizado!!!' })
// })

// router.delete('/:id', (req, res) => {
//   return res.json({ message: 'Eliminado!!!' })
// })

// REAL
router.get('/', async (req, res)=> {
  const notes = await Note.findAll()
  return res.json(notes)
})

router.post('/', async (req, res) => {
  const { body } = req
  const note = await Note.create({
    heading: body.heading,
    content: body.content
  })
  note.save()
  return res.json({ message: 'Nota creada!!!', data: note })
})

router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const note = await Note.findByPk(id);
  if(!note){
      return res.status(404).json({ message: 'Note not found!' });
  }
  const updateNote = await note.update({
      heading: body.heading,
      content: body.content
  })
  return res.json({ message: 'Nota actualizada !!!', data: updateNote });
})

router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const note = await Note.findByPk(id);
  if(!note){
      return res.status(404).json({ message: 'Note not found!' });
  }
  await note.destroy();
  return res.json({ message: 'Nota eliminada!!!' });
})

module.exports = router