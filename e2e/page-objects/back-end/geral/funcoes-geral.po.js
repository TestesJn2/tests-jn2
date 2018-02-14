//funcoes-geral.po.js

'use strict';  
var helper = require('../../../helper/helper.js');
//Ver nome do po e verificação se houve intereação do elemento

var funcoesGeralPage = function() {
	//Botões
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.btnLimparFiltro = element(by.id('id_a1e95ed8a08c1c86b671d10041880902'));
	this.btnExcluir = element(by.buttonText('Excluir'));
	this.linkTodosResultados = element(by.linkText('Marcar Todos'));
	this.btnExecutar = element(by.buttonText('Executar'));
	

	this.url = function () {
		browser.get('');
	};

	this.confirmarBusca = function () {
		helper.waitElementVisibility(this.btnFiltrar);
		this.btnFiltrar.click();
	};

	this.confirmarExclusao = function() {
		helper.waitElementVisibility(this.btnExcluir);
		this.btnExcluir.click();
	};

	this.selecionarTodosResultados = function() {
		helper.waitElementVisibility(this.linkTodosResultados);
		this.linkTodosResultados.click();
	};

	this.confirmarExecucao = function() {
		helper.waitElementVisibility(this.btnExecutar);
		this.btnExecutar.click();
	};

	this.confirmarBtnLimparFiltro = function() {
		helper.waitElementVisibility(this.btnLimparFiltro);
		this.btnLimparFiltro.click();
	}

};

module.exports = new funcoesGeralPage();

