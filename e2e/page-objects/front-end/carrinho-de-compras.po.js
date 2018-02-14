//carrinho-de-compras.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var carrinhoComprasPage = function() {
	
	//Botões
	this.btnAddProdCarrinho = element(by.id('btn-addtocart'));
	this.btnFinalizarCompra = element(by.buttonText('Finalizar Compra'));

	//Opções do Carrinho
	this.primeiroProdCarrinho = element(by.css('.product-cart-image a'));
	this.imgProdCarrinho = element(by.css('.product-image'));
	this.precoProdCarrinho = element(by.css('.price'));
	this.btnQtdeProduto = element(by.buttonText('Atualizar'));
	this.inputQtdeProduto = element(by.css('.product-cart-actions input'));
	this.msgProdAddNoCarrinho = element(by.css('.success-msg'));
	this.linhaProgresso = element(by.css('.col-xs-3.bs-wizard-step.active'));
	this.inputCEP = element(by.id('postcode'));
	this.btnCalculaEntrega = element(by.id('btn-shipping'));
	this.linkLixeira = element(by.linkText('Remover'));
	this.inputCupomDesconto = element(by.id('coupon_code'));
	this.dsSubTotal = element(by.cssContainingText('td', 'Subtotal'));
	this.dsVrTotal = element(by.cssContainingText('strong', 'Valor Total'));
	this.msgCarrinhoComprasVazio = element(by.cssContainingText('h1', 'Carrinho de Compras Vazio'));
	this.msgCliqueAquiParaContinuarComprando = element(by.linkText('aqui'));


	//Título
	this.titleCarrinhoDeCompras = element(by.cssContainingText('h1','Carrinho de Compras'));

	this.addProdutVisitadoCarrinhho = function() {
		helper.waitElementVisibility(this.btnAddProdCarrinho)
		this.btnAddProdCarrinho.click();
	};

	this.clickFinalizarCompra = function() {
		helper.waitElementVisibility(this.btnFinalizarCompra);
		this.btnFinalizarCompra.click();
	};

	this.excluirProdutoCarrinho = function() {
		helper.waitElementVisibility(this.linkLixeira);
		this.linkLixeira.click();
	};
};
module.exports = new carrinhoComprasPage();