const express = require("express")
const router = express.Router()
const Category = require("./Category")
const slugify = require("slugify") // tranforma string ex: dev web => dev-web

// ROTA DA PÁGINA QUE CRIA UMA NOVA CATEGORIA
router.get('/admin/categories/new', (req, res, next) => {
  res.render('admin/categories/new')
})

// ROTA PARA COM METODO PARA SALVAR UMA NOVA CATEGORIA
router.post('/categories/save', (req, res, next) => {
  let title = req.body.title
  if (title !== undefined) {
    Category.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect('/admin/categories/')
    })
  } else {
    res.redirect("/admin/categories/new")
  }
})

// ROTA PARA A TELA ONDE SERÃO MOSTRADAS AS CATEGORIAS CADASTRADAS
router.get('/admin/categories/', (req, res, next) => {
  Category.findAll().then(categories => {
    res.render('admin/categories/index', {categories: categories})
  })
})


// ROTA COM METODO PARA EXCLUSÃO DE REGISTRO DO BANCO
router.post('/categories/delete', (req, res, next) => {
  let id = req.body.id
  if (id !== undefined) {
    if(!isNaN(id)) {
      Category.destroy({
        where: {
          id: id
        }
      }).then(() => {
        res.redirect('/admin/categories/')
      })
    } else { // SE NÃO FOR NUMERO
      res.redirect('/admin/categories/')
    }
  } else { // SE NULLO
    res.redirect('/admin/categories/')

  }
    
})



module.exports = router