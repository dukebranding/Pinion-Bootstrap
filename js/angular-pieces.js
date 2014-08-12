(function(){
	var app = angular.module('pinionApp', []);
	 
	app.directive('pinionFooter', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '../partials/pinion-footer.html'
		 }
	});
	 
})();