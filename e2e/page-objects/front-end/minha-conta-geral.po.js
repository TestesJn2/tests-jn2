//menu.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var minhaContaGeralPage = function() {
	this.tituloGeral = element(by.cssContainingText('h1', ' Geral'));
	//Dados de Acesso
	this.tituloMinhaConta = element(by.cssContainingText('span','Minha Conta'));
	this.tituloDadosAcesso = element(by.cssContainingText('h2', 'Dados de Acesso'));
	this.linkAlterarSenha = element(by.cssContainingText('a', 'Alterar Senha'));
	this.msgBoasVindas = element(by.cssContainingText('strong', 'Olá, USUARIO TESTE AUTOMATIZADO LOGIN!'));
	this.tituloInfoContato = element(by.cssContainingText('h3', 'Informações de Contato'));
	this.boxNmCliente = element(by.cssContainingText('.box-content p', 'USUARIO TESTE AUTOMATIZADO LOGIN'));

	//Endereço
	this.tituloMeusEnderecos = element(by.cssContainingText('h3', 'Meus Endereços'));
	this.linkEditarEndereco =element(by.cssContainingText('a','Editar Endereço'));
	this.linkGerenciarEndereco = element(by.cssContainingText('a', 'Gerenciar Endereços'));
	this.boxEnderecoCobrancaPrincipal = element(by.cssContainingText('h4', 'Endereço de Cobrança Principal'));
	this.boxEnderecoEntregaPrincipal = element(by.cssContainingText('h4', 'Endereço de Entrega Principal'));

};

module.exports = new minhaContaGeralPage();