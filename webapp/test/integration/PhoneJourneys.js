jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/App",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Browser",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Master",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/Detail",
	"App_CRUD/AplicacaoCRUD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "App_CRUD.AplicacaoCRUD.view."
	});

	sap.ui.require([
		"App_CRUD/AplicacaoCRUD/test/integration/NavigationJourneyPhone",
		"App_CRUD/AplicacaoCRUD/test/integration/NotFoundJourneyPhone",
		"App_CRUD/AplicacaoCRUD/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});