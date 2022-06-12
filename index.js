const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
const productRouter = require('./routes/Products')

app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home.twig", {name: 'Jim', 'users': [
        {name: 'Justin', email: 'random1@email.com'},
        {name: 'Heather', email: 'random2@email.com'},
        {name: 'Emilia', email: 'random3@email.com'}
    ]})
})

app.use("/products", productRouter)

app.listen(3000)