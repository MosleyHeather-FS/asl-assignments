const express = require('express')
const app = express()

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/', (request, response) => {
    response.send('GET is GOT')
})

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/products/:productPage', (request, response) => {
    response.send(
        'Product Page: ' + request.params.productPage)
})

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/products/:productPage-:productPrice', (request, response) => {
    response.send(
        'Product Page: ' + request.params.productPage +
        'Product Price: ' + request.params.productPrice,
        )
})

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/products/:productPage-:productDesc', (request, response) => {
    response.send(
        'Product Page: ' + request.params.productPage +
        'Product Description: ' + request.params.productDesc,
        )
})

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/products/:all', (request, response) => {
    response.send(
        'Product Page: ' + request.params.productPage +
        'Product Price: ' + request.params.productPrice +
        'Product Description: ' + request.params.productDesc
        )
})

app.listen(3000)