const database = require("../config/db");
const Sequelize = require("sequelize");

const Fornecedor = database.define("fornecedor",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    razao_social:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{timestamps: false})

module.exports = Fornecedor;