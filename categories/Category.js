// MODEL DE CATEGORIA
const Sequelize = require("sequelize")
const connection = require("../database/database")

const Category = connection.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//PARA CRIAR OS A TABELA E OS RELACIONAMENTOS FOR
//Category.sync({force: true})

module.exports = Category
