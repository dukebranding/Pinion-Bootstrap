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
	
	app.directive('pinionProgress', function(){
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
	
	app.directive('buttonsSaveCancel', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-save-cancel.html'
		 };
	});
	
	app.directive('rowHeader', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-row-header.html'
		 };
	});
	
	//CHange to test new branch    Corey Gaudin - 4PM
})();