const express = require('express');
const app = express();
const porta = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/finalizar-venda', (req, res) => {
    let produto = req.body.produto
    let procoUnitario = req.body.precoUnitario
    let quantidade = req.body.quantidade
    let cupomDesconto = req.body.cupomDesconto

    if (quantidade <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: "Quantidade invalidada!"
        })
    }

    valorTotal = quantidade * procoUnitario

    if (cupomDesconto === "PROMO20") {
        valorTotal = valorTotal * 0.80;
    }

    return res.status(201).json({
        sucesso: true,
        mensagem: `seu ${produto} comprado com sucesso! valor ${valorTotal}`
    })

})
app.listen(porta, () => {
    console.log(`Servidor rodando! Agurdando o formularrio HTML na porta ${porta}...`)
})