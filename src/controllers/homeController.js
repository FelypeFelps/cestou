const produtoModel = require('../models/produtoModel');

exports.index = (req, res) => {
    const produto = produtoModel.obterComparacao();

    res.render('cliente/index', { produto });
};