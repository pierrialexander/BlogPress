const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const Article = require("./articles/Articles") //MODEL
const Category = require("./categories/Category") //MODEL

//view engine
app.set('view engine', 'ejs')
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Static
app.use(express.static('public'))
//Database
connection.authenticate()
          .then(() => {
            console.log('Sucesso na conexão com Banco de Dados')
          }).catch((err) => {
            console.log(err)
          })


app.use("/", categoriesController)
app.use("/", articlesController)

app.get('/', (req, res, next) => {
  res.render('index')
})



app.listen(8081, () => {
  console.log("O servidor está rodando na porta 8081")
})