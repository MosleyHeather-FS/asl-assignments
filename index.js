const express = require('express')
const app = express()

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/', (request, response) => {
    response.send('GET is GOT')
})

// GET /products/8719 HTTP/1.1
app.get('/products/:productId', (request, response) => {
    response.send(
        'Product: ' + request.params.productId)
})

// GET /products/all?sort=price HTTP/1.1
app.get('/products/:productId-:productSize-:productColor', (request, response) => {
    response.send(
        'Product: ' + request.params.productId + request.params.productSize + request.params.productColor)
})

// GET /products/all?sort=price HTTP/1.1
app.get('/products/:all', (request, response) => {
    response.send(
        'Product: ' + request.params.productId + request.params.productSize + request.params.productColor)
})

app.listen(3000)