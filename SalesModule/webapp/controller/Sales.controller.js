sap.ui.define([
        "sap/ui/core/mvc/Controller",
        'sap/m/library',
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, mobileLibrary) {
		"use strict";
        var URLHelper = mobileLibrary.URLHelper;
		return Controller.extend("ns.SalesModule.controller.Sales", {
			onInit: function () {

            },
            tutorial1Press: function (evt) {
			    URLHelper.redirect("https://blogs.sap.com/2020/10/02/serverless-sap-fiori-apps-in-sap-cloud-platform/", true);
            },
            tutorial2Press: function (evt2) {
			    URLHelper.redirect("https://blogs.sap.com/2020/09/11/html5-applications-managed-by-sap-cloud-platform-the-new-way-of-developing-html5-apps/", true);
            },
            gitHubPress: function (evt3) {
			    URLHelper.redirect("https://github.com/rajagupta20/ServlerlessFioriApp", true);
		    }
		});
	});
