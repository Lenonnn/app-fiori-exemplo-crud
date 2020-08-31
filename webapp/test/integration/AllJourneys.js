jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Zcdscrud_abap07 in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/App",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Browser",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Master",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Detail",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Create",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "App_CRUD.AplicacaoCRUD.view."
	});

	sap.ui.require([
		"App_CRUD/AplicacaoCRUD/test/integration/MasterJourney",
		"App_CRUD/AplicacaoCRUD/test/integration/NavigationJourney",
		"App_CRUD/AplicacaoCRUD/test/integration/NotFoundJourney",
		"App_CRUD/AplicacaoCRUD/test/integration/BusyJourney",
		"App_CRUD/AplicacaoCRUD/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});