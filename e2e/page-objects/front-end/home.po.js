//home.po.js

'use strict';  
var helper = require('../../helper/helper.js');

var homePage = function() {

	this.gridInitProdutos = element(by.css('.products-grid'));
	this.primeiroProdListado = element(by.css('.item a'));

	/*this.selecionaPrimeiroProdListado = function() {
		helper.waitElementVisibility(this.primeiroProdListado);
		this.primeiroProdListado.click();
	};*/

};

module.exports = new homePage();