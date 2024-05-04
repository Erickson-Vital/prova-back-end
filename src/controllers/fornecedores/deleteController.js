const Fornecedor = require("../../model/fornecedor.model");

async function Post(req, res){
    const { cnpj } = req.body;
    const cnpjExiste = await Fornecedor.findAll({ where: { cnpj} })

    if (cnpjExiste.length > 0){
        const deleteFornecedor = cnpjExiste[0];
        await deleteFornecedor.destroy();
        return res.status(200).json({ message: "Fornecedor deletado!"})
    }else{
        return res.status(400).json({ message: "Não foi possivel deletar o fornecedor!"})
    }

}

module.exports = { Post };