(function(){
	var app = angular.module("pinionApp", []);
	
	app.directive('pinionHeader', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-header.html'
		 };
	});
	
	app.directive('pinionFooter', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-footer.html'
		 };
	});
	
	app.directive('pinionFilters', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-filters.html'
		 };
	});
	
	app.directive('pinionPageProgress', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-progress.html'
		 };
	});
	
	app.directive('pinionLoadmore', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-loadmore.html'
		 };
	});
	
	app.directive('pinionSettings', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-settings.html'
		 };
	});
	
	
	
})();