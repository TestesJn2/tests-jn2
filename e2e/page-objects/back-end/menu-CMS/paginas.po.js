//paginas.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var paginasPage = function () {
	//Cabeçalho
	this.tituloGerenciarPagina = element(by.cssContainingText('h3', 'Gerenciar Página'));
	this.btnCriarPagina = element(by.id('id_35ef169a8c796e33df35e348e8b62d4e'));

	//Tabelas
	this.columnNmURL = element(by.linkText('Nome na URL'));
	this.inputNmURL = element(by.id('cmsPageGrid_filter_identifier'));
	this.columnLayout = element(by.linkText('Layout'));
	this.inputLayout = element(by.id('cmsPageGrid_filter_root_template'));
	this.columnStatus = element(by.linkText('Status'));
	this.inputStatus = element(by.id('cmsPageGrid_filter_is_active'));
	this.columnDtCriacao = element(by.linkText('Data Criação'));
	this.inputDtCriacaoDe = element(by.id('cmsPageGrid_filter_creation_time1519739512.2901_from'));
	this.inputDtCriacaoAte = element(by.id('cmsPageGrid_filter_creation_time1519739512.2901_to'));
	this.columnUltimaModificacao = element(by.linkText('Última Modificação'));
	this.inputUltimaModificacaoDe = element(by.id('cmsPageGrid_filter_update_time1519739512.2936_from'));
	this.inputUltimaModificacaoAte = element(by.id('cmsPageGrid_filter_update_time1519739512.2936_to'));
	this.listaPaginasCadastradas = element.all(by.css('#cmsPageGrid_table > tbody > tr'));

	//Criar ou Editar Página
	this.tituloCriarPagina = element(by.cssContainingText('h3', 'Criar Pagina'));
	//Informações da Página
	this.opcaoInfoPagina = element(by.id('page_tabs_main_section'));
	this.tituloInfoPagina = element(by.cssContainingText('h4', 'Informações da Página'));
	this.labelTituloPagina = element(by.cssContainingText('label', 'Título da Página '));
	this.inputTituloPagina = element(by.id('page_title'));
	this.labelNomeURL = element(by.cssContainingText('label', 'Nome na URL'));
	this.inputNomeURL = element(by.id('page_identifier'));
	this.labelStatus = element(by.cssContainingText('label', 'Status'));
	this.inputStatus = element(by.id('page_is_active'));
	//Contéudo
	this.opcaoConteudo = element(by.id('page_tabs_content_section'));
	this.tituloConteudo = element(by.cssContainingText('h4', 'Conteúdo'));
	this.labelTituloCabecalho = element(by.cssContainingText('label', 'page_content_heading'));
	this.btnMostrarOcultarEditor = element(by.id('togglepage_content'));
	this.inputTextoPagina = element(by.id('page_content'));
	//Template
	this.opcaoTemplate = element(by.id('page_tabs_design_section'));
	this.tituloLayoutPagina = element(by.cssContainingText('h4', 'Layout da Pagina'));
	this.labelLayout = element(by.cssContainingText('label', 'Layout'));
	this.inputLayout = element(by.id('page_root_template'));
	this.labelAtualizaLayoutXML = element(by.cssContainingText('label', 'Atualização de Layout por XML'));
	this.inputAtualizaLayoutXML = element(by.id('page_layout_update_xml'));
	this.tituloDesignCustomizado = element(by.cssContainingText('h4', 'Design Customizado'));
	this.labelDesignCustomizadoDe = element(by.cssContainingText('label', 'Design Customizado de'));
	this.inputDesignCustomizadoDe = element(by.id('page_custom_theme_from'));
	this.labelDesignCustomizadoPara = element(by.cssContainingText('label',  'Design Customizado para'));
	this.inputDesignCustomizadoPara = element(by.id('page_custom_theme_to'));
	this.labelTemaCustomizado = element(by.cssContainingText('label', 'Tema Customizado'));
	this.inputTemaCustomizado = element(by.id('page_custom_theme'));
	this.labelLayoutCustomizado = element(by.cssContainingText('label', 'page_custom_root_template'));
	this.inputLayoutCustomizado = element(by.id('page_custom_root_template'));
	this.labelAtualizaXMLLayoutCustomizado = element(by.cssContainingText('label', 'Atualizar XML de layout customizado'));
	this.inputAtualizaXMLLayoutCustomizado = element(by.id('page_custom_layout_update_xml'));
	//Meta Tags da Página
	this.opcaoMetaTagsPagina = element(by.id('page_tabs_meta_section'));
	this.tituloMetaTagsPagina = element(by.cssContainingText('h4', 'Meta Tags da Página'));
	this.labelPalavrasChaves = element(by.cssContainingText('label', 'Palavras-Chaves'));
	this.inputPalavrasChaves = element(by.id('page_meta_keywords'));
	this.labelDescricao = element(by.cssContainingText('label', 'Descrição'));
	this.inputDescricao = element(by.id('page_meta_description'));
};

module.exports = new paginasPage();