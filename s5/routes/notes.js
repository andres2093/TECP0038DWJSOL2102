const express = require("express")
const router = express.Router()
const { Note } = require('../sequelize')
const { Op } = require('sequelize')

// DUMMY
const notes = [
  {
    id: 1,
    title: "Nota dummy",
    content: "Dummy nota"
  }
]

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

router.get('/', (req, res)=> {
  return res.json(notes)
})

router.post('/', (req, res) => {
  return res.json({ message: 'Creado!!!' })
})

router.put('/:id', (req, res) => {
  return res.json({ message: 'Actualizado!!!' })
})

router.delete('/:id', (req, res) => {
  return res.json({ message: 'Eliminado!!!' })
})

module.exports = router