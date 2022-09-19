const db = require("./db");

//your table informations here.
const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.Sequelize.STRING,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});
//.sync({ force: true });

module.exports = Post;
