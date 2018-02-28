//funcoes-geral.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var funcoesGeralPage = function() {

	//Botões
	this.btnFiltrar = element(by.buttonText('Filtrar'));
	this.btnLimparFiltro = element(by.buttonText('Limpar Filtros'));
	this.btnExcluir = element(by.buttonText('Excluir'));
	this.btnExecutar = element(by.buttonText('Executar'));
	this.btnAdicionarArquivo  = element(by.buttonText('Adicionar arquivo'));
	this.btnVoltar = element(by.buttonText('Voltar'));
	this.btnSalvarContinuarEdit = element(by.buttonText('Salvar e Continuar Editando'));
	this.btnDesfazer = element(by.buttonText('Desfazer'));
	this.btnSalvar = element(by.buttonText('Salvar'));

	//Demais dados do cabeçalho
	this.linkTodosResultados = element(by.linkText('Marcar Todos'));
	this.linkDesmarcarTodos = element(by.linkText('Desmarcar Todos'));
	this.linkMarcarVisiveis = element(by.linkText('Marcar Visíveis'));
	this.linkDesmarcarVisiveis = element(by.linkText('Desmarcar Visíveis'));
	

	this.url = function () {
		browser.get('');
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

