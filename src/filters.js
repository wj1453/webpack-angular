module.exports=function(ngModule){
	ngModule.filter('stringFilter',function(){
		return function(input){
			var output=input+"123";
			return output;
		}
	})
}
