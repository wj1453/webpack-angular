require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
var angular=require('angular');
var ngRoute=require('angular-route');
var ngAnimate=require('angular-animate');
var controllers=require('./controllers.js');
var filters=require('./filters.js');
var ngModule=angular.module('myApp',[ngRoute,ngAnimate])

/*routes*/
ngModule.config(function($routeProvider){
	$routeProvider
	.when('/',{controller:'indexCtrl',templateUrl:'./views/index.html'})
	.when('/list.html',{controller:'listCtrl',templateUrl:'./views/list.html'})
	.otherwise({redirectTo:'/'});
})

/*controllers*/
ngModule.controller('mainCtrl',controllers.mainCtrl);
ngModule.controller('indexCtrl',controllers.indexCtrl);
ngModule.controller('listCtrl',controllers.listCtrl);

/*filters*/
filters(ngModule);
