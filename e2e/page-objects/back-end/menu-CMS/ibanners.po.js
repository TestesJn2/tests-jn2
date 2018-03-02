//ibanners.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var ibannersPage = function () {
	//Cabeçalho
	this.tituloIBanners = element(by.cssContainingText('h3', 'iBanners'));

	//Opção Grupos
	this.btnGrupos = element(by.id('ibanners_dashboard_tabs_group'));
	this.btnAddNovoGrupo = element(by.id('id_bad378f011f93372363283864b29a163'));
	//Tabela de Grupos
	this.columnTitulo = element(by.linkText('Título'));
	this.inputTitulo = element(by.id('ibanners_group_grid_filter_title'));
	this.columnCodigo = element(by.linkText('Código'));
	this.inputCodigo = element(by.id('ibanners_group_grid_filter_code'));
	this.columnAtivo = element(by.linkText('Ativado'));
	this.inputAtivo = element(by.id('ibanners_group_grid_filter_is_enabled'));
	//Editar ou Criar Novo Grupo
	//Geral
	this.opcaoGeral = element(by.id('ibanners_group_tabs_general'));
	this.tituloInformacoes = element(by.cssContainingText('h4', 'Informações'));
	this.labelTitulo = element(by.cssContainingText('label', 'Título'));
	this.inputTitulo = element(by.id('group_title'));
	this.labelCodigo = element(by.cssContainingText('label', 'Código'));
	this.inputCodigo = element(by.id('group_code'));
	this.labelPosicaoBanner = element(by.cssContainingText('label', 'Randomise Banner Position'));
	this.inputPosicaoBanner = element(by.id('group_randomise_banners'));
	this.labelAtivado = element(by.cssContainingText('label', 'Ativado'));
	this.inputAtivado = element(by.id('group_is_enabled'));
	this.labelLoja = element(by.cssContainingText('label', 'Loja'));
	this.inputLoja = element(by.id('group_store_id'));
	this.labelHabilitAnimacao = element(by.cssContainingText('label', 'Enable Animation'));
	this.inputHabilitAnimacao = element(by.id('group_carousel_animate'));
	this.labelDuracaoAnimacao = element(by.cssContainingText('label', 'Animation Duration'));
	this.inputDuracaoAnimacao = element(by.id('group_carousel_duration'));
	this.labelIniciarAutomaticamente = element(by.cssContainingText('label', 'Auto-Start'));
	this.inputIniciarAutomaticamente = element(by.id('group_carousel_auto'));
	this.labelFrequenciaAnimacao = element(by.cssContainingText('label', 'Animation Frequency'));
	this.inputFrequenciaAnimacao = element(by.id('group_carousel_frequency'));
	this.labelSlideVisivel = element(by.cssContainingText('label', 'Visible Slides'));
	this.inputSlideVisivel = element(by.id('group_carousel_visible_slides'));
	this.labelEfeito = element(by.cssContainingText('label', 'Effect'));
	this.inputEfeito = element(by.id('group_carousel_effect'));
	this.labelTransacao = element(by.cssContainingText('label', 'Transition'));
	this.inputTransacao = element(by.id('group_carousel_transition'));
	this.labelPosicao = element(by.cssContainingText('label', 'Posição'));
	this.inputPosicao = element(by.id('group_controls_position'));
	this.labelOverlap = element(by.cssContainingText('label', 'Overlap'));
	this.inputOverlap = element(by.id('group_controls_overlap'));
	//Banners
	this.optionBanners = element(by.id('ibanners_group_tabs_banners'));
	this.listaTabela = element.all(by.css('#banner_grid_table > tbody > tr'));

	//Oção de Banner
	this.opcaoBanner = element(by.id('ibanners_dashboard_tabs_banner'));
	this.columnGrupo = element(by.linkText('Grupo'));
	this.inputGrupo = element(by.id('ibanners_banner_grid_filter_group_id'));
	this.listaBanners = element.all(by.css('#ibanners_banner_grid_table > tbody > tr'));
};

module.exports = new ibannersPage();
