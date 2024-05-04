const Sequelize = require("sequelize");

//Conexão com o MYSQL pelo Sequelize
const database = new Sequelize(
  "postgres",
  "postgres",
  "123",
  {
    dialect: "postgres",
    host: "localhost",
  }
);

//Verifica Algum erro na Autenticação do banco
database
  .authenticate()
  .then(() => {
    console.log("Conexão com o database estabelecida sucesso.");
  })
  .catch((err) => {
    console.error("Houve o seguinte erro na conexão: \n", err);
  });

// Sincroniza o banco de dados e trata
try {
  database.sync();
  console.log("Database sincronizado com sucesso");
} catch (error) {
  console.log("House o seguinte erro na sincronização: \n" + error);
}


module.exports = database;