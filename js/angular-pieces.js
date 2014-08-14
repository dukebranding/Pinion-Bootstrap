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
	
	app.directive('pinionRowHeader', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-row-header.html'
		 };
	});
	
	app.directive('pinionRow', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-row.html'
		 };
	});
	
	app.directive('areaHeaderTitle', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/area-header-title.html'
		 };
	});
	
	app.directive('buttonsBack', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-back.html'
		 };
	});
	
	app.directive('leftMenuArea', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/left-menu-area.html'
		 };
	});
	
	app.directive('buttonsFilter', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-filter.html'
		 };
	});
	
	app.directive('pinionIconLegend', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-icon-legend.html'
		 };
	});
	
	app.directive('areaHeaderTest', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/area-header-test.html'
		 };
	});
	

})();