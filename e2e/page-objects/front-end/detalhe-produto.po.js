//detalhes-produto.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var detalheProdutoPage = function() {
	this.produtoVisitado = element(by.css('.product-view'));
	this.imgProdutoVisitado = element(by.css('.img-responsive'));
	this.tituloProduto = element(by.css('.product-name h1'));
	this.precoProduto = element(by.css('.price'));
	this.descricaoCurta = element(by.css('.short-description'));
	this.descricaoQtde = element(by.cssContainingText('label', 'Quantidade'));
	this.inputQuantidade = element(by.id('qty'));
	this.iconFavoritos = element(by.css('.ico-favoritos'));
	this.descricaoCalculoFrete = element(by.cssContainingText('label', 'Calcular frete e prazo'));
	this.inputCalculoFrete = element(by.id('estimate_postcode'));
	this.btnCalculoFrete = element(by.id('btn-calc-frete'));
	this.tituloDescricao = element(by.cssContainingText('h3', 'Sobre o produto'));
	this.btnComprar = element (by.id('btn-addtocart'));

};

module.exports = new detalheProdutoPage ();