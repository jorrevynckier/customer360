sap.ui.define([
	"com/delaware/jv/trac2018/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.jv.trac2018.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});