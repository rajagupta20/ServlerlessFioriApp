/*global QUnit*/

sap.ui.define([
	"ns/SalesModule/controller/Sales.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Sales Controller");

	QUnit.test("I should test the Sales controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
