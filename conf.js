//conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',

  	specs: [
  		'spec.js'	 
      , './e2e/spec/back-end/pre-teste/conf-base-teste.spec.js'
      //,'./e2e/spec/front-end/smoke-test.spec.js'
  	],

  	baseUrl : 'http://homologacao.jn2.xyz',

  	capabilities: {
    	'browserName':'chrome',
    		chromeOptions: {
     			args: ['disable-popup-blocking']
    		}
  	},

  	jasmineNodeOpts: {
    	// O tempo padrão para esperar em ms antes de um teste falhar.
    	defaultTimeoutInterval: 1000000
  	},

  	onPrepare: function() {
  		browser.manage().window().setSize(1400, 1000);
    	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      		savePath: 'e2e/report',
      		takeScreenshots: true,
      		takeScreenshotsOnlyOnFailures: false
    	}));
  	}
}

