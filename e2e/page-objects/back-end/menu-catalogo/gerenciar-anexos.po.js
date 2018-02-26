//gerenciar-anexos.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var gerenciarAnexosPage = function() {
	//Elementos
	this.tituloGerenciarAnexos = element(by.cssContainingText('h3', 'gerenciarAnexosPage'));

	//Input de Busca
	this.inputTitulo = element(by.id('fileuploadGrid_filter_title'));
	this.inputProduto = element(by.id('fileuploadGrid_filter_product_ids'));
	this.inputArquivo = element(by.id('fileuploadGrid_filter_uploaded_file'));
	this.inputOrdemExibicao = element(by.id('fileuploadGrid_filter_sort_order'));
	this.inputStatus = element(by.id('fileuploadGrid_filter_file_status'));

};

module.exports = new gerenciarAnexosPage();