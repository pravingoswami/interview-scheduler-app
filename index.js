const express = require('express')
const setupDB = require('./config/databse')
const router = require('./config/routes')

const app = express ()

app.use(express.json())

app.use('/', router)

setupDB()

const port = 3014

app.listen(port, () => {
    console.log('listening on port', port)
})