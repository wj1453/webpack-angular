require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
var angular=require('angular');
var uiRouter=require('angular-ui-router');
var ngAnimate=require('angular-animate');
var controllers=require('./src/controllers.js');
var filters=require('./src/filters.js');
var ngModule=angular.module('myApp',['ui.router','ngAnimate'])

/*routes*/
ngModule.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('index', {
			url: "/",
			templateUrl: "./views/index.html",
			controller:'indexCtrl'
		})

		.state('list', {
			url: "/list",
			templateUrl: "./views/list.html",
			controller:'listCtrl'
		})
}])

/*controllers*/
ngModule.controller('mainCtrl',controllers.mainCtrl);
ngModule.controller('indexCtrl',controllers.indexCtrl);
ngModule.controller('listCtrl',controllers.listCtrl);

/*filters*/
filters(ngModule);
