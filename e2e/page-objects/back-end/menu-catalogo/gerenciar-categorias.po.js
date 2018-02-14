//gerenciar-categorias.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var gerenciarCategoriasPage = function() {
	this.categoriaHome = element(by.partialLinkText('Home ('));
	this.linkExpandirCategoria = element(by.linkText('Expandir'));
	this.subCategoriaLancamentos = element(by.partialLinkText('Lançamentos |O que tem de mais novo para você;)'));
	this.subCategoriaCriadosMudos = element(by.partialLinkText('Criados-Mudos ('));
	this.btnSalvarCategoria = element(by.buttonText('Salvar Categoria'));
	this.msgAltCategoriaSalva = element(by.cssContainingText('span', 'Alterações na categoria salvas com sucesso.'));


	//Informações Gerais
	this.inputNmCategoria = element(by.id('group_4name'));

	//Opção Produtos
	this.optionProdutos = element(by.id('category_info_tabs_products'));
	this.nmPrimeiroProdListaCategoria = element(by.css('#catalog_category_products_table > tbody > tr.even.pointer.on-mouse > td:nth-child(3)'));
	this.inputEditOrdemProdutoCategoria = element(by.css('#catalog_category_products_table > tbody > tr.even.pointer.on-mouse > td.editable.a-right.last > input'));
	//Opção Produtos > Filtros
	this.inputPosicaoDe = element(by.id('catalog_category_products_filter_position_from'));
	this.inputPosicaoPara = element(by.id('catalog_category_products_filter_position_to'));
	//Opção Produtos > Lista de Produtos
	this.tabelaProdutos = element.all(by.css('#catalog_category_products_table tbody tr'));

	this.selecionarElemento  = function(element) {
		var elemento = element;
		helper.waitElementVisibility(elemento);
		elemento.sendKeys(protractor.Key.ENTER);
	};

	this.editarElemento = function (element, txt) {
		var elemento = element;
		helper.waitElementVisibility(elemento);
		elemento.clear().sendKeys(txt);
	};
};

module.exports = new gerenciarCategoriasPage();