const express = require("express")
const router = express.Router()

// localhost:3000/api/notes
router.use('/notes', require('./notes'))

module.exports = router