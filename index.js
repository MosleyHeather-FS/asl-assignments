const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', __dirname + '/templates/views')
app.set('view engine', 'mustache')

app.use("/products", productRouter)

app.listen(3000)