const express = require('express')
const app = express()

// GET /products/all HTTP/1.1
app.get('/', (req, res) => {
    res.send('GET is GOT')
})

// GET /products/8719 HTTP/1.1
app.get('/products/:id', (req, res) => {
    res.send(
        `Product:  ${req.params.id}`)
})

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:id-:size-:color', (req, res) => {
    res.send(
        `Product: ${req.params.id}, ${req.params.size}, ${req.params.color}`)
})

app.listen(3000)