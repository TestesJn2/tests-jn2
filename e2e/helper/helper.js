//helper.js

'use strict';
var EC = protractor.ExpectedConditions;

module.exports = {
	waitElementVisibility : function (element) {
		browser.wait(EC.visibilityOf(element), 12000);
	}
};
