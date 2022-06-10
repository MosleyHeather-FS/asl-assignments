const Products = require('../restfulApi/models/Products')

//GET
const index = (req, res) => {
  const products = Products.all()
  res.json(products)
};

//GET
const form = (req, res) => {
  res.send("Product.form");
};

//GET
const show = (req, res) => {
  const product = Products.find(req.params.id)
  res.json(product)
};

//POST
const create = (req, res) => {
  const product = Products.create(req.body)
  res.json(product)
};

//POST
const update = (req, res) => {
  const product = Products.update(req.params.id, req.body)
  res.json(product)
};

//DELETE and/or POST
const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.json(products)
}

module.exports = { index, form, show, create, update, remove };
