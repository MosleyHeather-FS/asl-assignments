const { Variant } = require('../models')

//GET
const index = async (req, res) => {
  const variants = await Variant.findAll()
  res.render('views/variants/index', {variants})
};

//GET
const form = async (req, res) => {
  if (req.params.id) {
    variant = await Variant.findByPk(req.params.id)
    res.render('views/variants/edit', {variant})
  } else {
    res.render('views/variants/create')
  }
};

//GET
const show = async (req, res) => {
  const variant = await Variant.findByPk(req.params.id)
  res.render('views/variants/show', {variant})
};

//POST
const create = async (req, res) => {
  const variant = await Variant.create(req.body)
  res.redirect('/variants/' + variant.id)
};

//POST
const update = async (req, res) => {
  const variant = await Variant.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/variants/' + req.params.id)
};

//DELETE and/or POST
const remove = async (req, res) => {
    const variants = await Variant.destroy({ where: { id: req.params.id }})
    res.redirect('/variants/')
}

module.exports = { index, form, show, create, update, remove }; 