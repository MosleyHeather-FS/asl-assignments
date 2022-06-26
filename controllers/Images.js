const { Image, Variant } = require('../models')

//GET
const index = async (req, res) => {
  const images = await Image.findAll()
  res.render('views/images/index', {images})
};

//GET
const form = async (req, res) => {
  const variants = await Variant.findAll()
  if (req.params.id) {
    const image = await Image.findByPk(req.params.id)
    res.render('views/images/edit', {image, variants})
  } else {
    res.render('views/images/create', {variants})
  }
};

//GET
const show = async (req, res) => {
  const image = await Image.findByPk(req.params.id)
  const variant = await image.getVariant()
  res.render('views/images/show', {image, variant})
};

//POST
const create = async (req, res) => {
  const image = await Image.create(req.body)
  req.imageId = image.id
  next()
  res.redirect('/images/' + image.id)
};

//POST
const update = async (req, res) => {
  const image = await Image.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  req.imageId = req.params.id
  next()
  res.redirect('/images/' + req.params.id)
};

//DELETE and/or POST
const remove = async (req, res) => {
    const images = await Image.destroy({ where: { id: req.params.id }})
    res.redirect('/images/')
}

module.exports = { index, form, show, create, update, remove }; 