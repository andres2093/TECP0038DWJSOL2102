const express = require("express")
const router = express.Router()

const comments = [
  {
    id: 1,
    id_note: 1,
    comment: "Comentario dummy",
    author: "Andres R"
  }
]

router.get('/', (req, res)=> {
  return res.json(comments)
})

router.post('/', (req, res) => {
  return res.json({ message: 'Comantario Creado!!!' })
})

router.put('/:id', (req, res) => {
  return res.json({ message: 'Actualizado!!!' })
})

router.delete('/:id', (req, res) => {
  return res.json({ message: 'Eliminado!!!' })
})

module.exports = router