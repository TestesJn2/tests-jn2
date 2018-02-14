//termos-de-cobranca.po.js

'use strict';  
var helper = require('../../../helper/helper.js');

var termosCobrancaPage = function() {
	this.tituloTermoCobranca = element(by.cssContainingText('h3', 'Termos de Cobrança'));

	
};

module.exports = new termosCobrancaPage();