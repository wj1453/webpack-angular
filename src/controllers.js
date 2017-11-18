var mainCtrl=function($scope,$rootScope){
	$scope.siteInfo={};
	$scope.siteInfo.siteName="币安";
	$scope.siteInfo.pageTitle="";
	$rootScope.test="123"
}

var indexCtrl=function($scope,$http){
	$scope.siteInfo.pageTitle='首页'
}

var listCtrl=function($scope){
	$scope.siteInfo.pageTitle='列表页'
}

module.exports={
	'mainCtrl':mainCtrl,
	'indexCtrl':indexCtrl,
	'listCtrl':listCtrl
}
