const { Image } = require('../models')

//GET
const index = async (req, res) => {
  const images = await Image.findAll()
  res.render('views/images/index', {images})
};

//GET
const form = async (req, res) => {
  if (req.params.id) {
    const image = await Image.findByPk(req.params.id)
    res.render('views/images/edit', {image})
  } else {
    res.render('views/images/create')
  }
};

//GET
const show = async (req, res) => {
  const image = await Image.findByPk(req.params.id)
  res.render('views/images/show', {image})
};

//POST
const create = async (req, res) => {
  const image = await Image.create(req.body)
  res.redirect('/images/' + image.id)
};

//POST
const update = async (req, res) => {
  const image = await Image.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/images/' + req.params.id)
};

//DELETE and/or POST
const remove = async (req, res) => {
    const images = await Image.destroy({ where: { id: req.params.id }})
    res.redirect('/images/')
}

module.exports = { index, form, show, create, update, remove }; 