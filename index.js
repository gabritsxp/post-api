const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/Post");

//Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Database conection
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  Post.findAll().then((posts) => {
    res.render("home", { posts: posts });
  });
});

app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.send("Post Criado com sucesso");
    })
    .catch((erro) => {
      res.send("Houve um erro: " + erro);
    });
});

app.listen(8081, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});
