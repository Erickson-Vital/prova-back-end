const Fornecedor = require("../../model/fornecedor.model");

async function Get(req,res){
    const list = await Fornecedor.findAll();
    res.status(200).json(list)
}

module.exports = { Get }