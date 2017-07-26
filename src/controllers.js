var mainCtrl=function($scope,$rootScope){
	$rootScope.siteName='币安'
}

var indexCtrl=function($scope,$rootScope,$http){
	$rootScope.pageTitle='首页'
	/*$http.get('/exchange/public/serverTime').success(function(data){
		
	})*/
}

var listCtrl=function($scope,$rootScope){
	$rootScope.pageTitle='列表页'
}

module.exports={
	'mainCtrl':mainCtrl,
	'indexCtrl':indexCtrl,
	'listCtrl':listCtrl
}
