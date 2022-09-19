const Sequelize = require("sequelize");
//your database informations here
const sequelize = new Sequelize("postapp", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexão Estabelecida!");
} catch (error) {
  console.error("Falha na Conexão!");
}

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
