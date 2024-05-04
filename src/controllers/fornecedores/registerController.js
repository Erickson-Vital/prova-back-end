const Fornecedor = require("../../model/fornecedor.model");

async function Post(req,res){
    const { razao_social, cnpj, email, telefone, endereco } = req.body;
    const cnpjExist = await Fornecedor.findOne({ where: {cnpj}, raw: true})

    if(cnpjExist != null){
        console.log(cnpjExist,"Já existe um fornecedor com este CNPJ!")
        res.status(400).json({message: "Já existe um fornecedor com este CNPJ!"})
    }else{
        const userCreate = await Fornecedor.create({
            razao_social:razao_social,
            cnpj:cnpj,
            email:email,
            telefone:telefone,
            endereco:endereco
        })
        res.status(200).json(userCreate);
        console.log("Fornecedor cadastrado com sucesso !");
    }
}

module.exports = { Post };