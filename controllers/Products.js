const Products = require('../models/Products')

//GET
const index = (req, res) => {
  const products = Products.all()
  res.render('views/products/index', {products})
  //res.json(products)
};

//GET
const form = (req, res) => {
  if (req.params.id) {
    const product = Products.find(req.params.id)
    res.render('views/products/edit', {product})
  } else {
    res.render('views/products/create')
  }
  //res.send("Product.form");
};

//GET
const show = (req, res) => {
  const product = Products.find(req.params.id)
  res.render('views/products/show', {product})
  //res.json(product)
};

//POST
const create = (req, res) => {
  const product = Products.create(req.body)
  res.redirect('/products/' + product.id)
  //res.json(product)
};

//POST
const update = (req, res) => {
  const product = Products.update(req.params.id, req.body)
  res.redirect('/products/' + req.params.id)
  //res.json(product)
};

//DELETE and/or POST
const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.redirect('/products')
    //res.json(products)
}

module.exports = { index, form, show, create, update, remove };
