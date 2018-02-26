//geral-catalogo.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var geralCatalogo = function () {

	//Coluna Tabela
	this.colTitulo = element(by.linkText('Título'));
	this.colProduto = element(by.linkText('Produtos'));
	this.colArquivo = element(by.cssContainingText('.nobr', 'Arquivo'));
	this.colOrdemExibicao = element(by.linkText('Ordem de exibição'));
	this.colstatus = element(by.linkText('Status'));

	//Input do Filtro
	

};

module.exports  = new geralCatalogo();