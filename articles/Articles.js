// MODEL DE CATEGORIA
const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

/*
1-P-1 = belongsTo
1-P-M = hasMany
*/ 

// TEM MUITOS. (uma categoria tem MUITOS ARTIGOS)
Category.hasMany(Article)
// faz o relacionamento "UM ARTIGO PERTENCE HÁ UMA CATEGORIA" 
Article.belongsTo(Category)

//PARA CRIAR A TABELA E OS RELACIONAMENTOS
//Article.sync({force: true})

module.exports = Article
