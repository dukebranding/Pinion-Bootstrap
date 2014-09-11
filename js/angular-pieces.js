(function(){
	var app = angular.module("pinionApp", []);
	
// ---------- pinion items for many sections	
	
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
	
	app.directive('pinionIconLegend', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/pinion-icon-legend.html'
		 };
	});
	
// ---------- buttons partials
	
	app.directive('buttonsSaveCancel', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-save-cancel.html'
		 };
	});
	
	app.directive('buttonsBack', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-back.html'
		 };
	});
	
	app.directive('buttonsFilter', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-filter.html'
		 };
	});
	
	app.directive('buttonsQuestion', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-question.html'
		 };
	});
	
	app.directive('buttonsAddCancel', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-add-cancel.html'
		 };
	});
	
	app.directive('buttonsSlideAddNew', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/buttons-slide-add-new.html'
		 };
	});
	
	app.directive('buttonsEditTraining', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/buttons-edit-training.html'
		}
	});
	
	app.directive('buttonsModify', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/buttons-modify.html'
		}
	});
	
	app.directive('buttonsEditTest', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/buttons-edit-test.html'
		}
	});
	
	app.directive('buttonsAddQuestion', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/buttons-add-question.html'
		}
	});
	
	app.directive('buttonsAddAnswer', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/buttons-add-answer.html'
		}
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
	
// --------- page pieces
	
	app.directive('areaHeaderTitle', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/area-header-title.html'
		 };
	});
	
	app.directive('leftMenuArea', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/left-menu-area.html'
		 };
	});
	
	app.directive('areaHeaderTest', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/area-header-test.html'
		 };
	});
	
// ---------- slides, questions, answers, tests	
	
	app.directive('slideQuestionMaterial', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/slide-question-material.html'
		 };
	});
	
	app.directive('slideAddNew', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/slide-add-new.html'
		 };
	});
	
	app.directive('slideModuleSettings', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/slide-module-settings.html'
		 };
	});
	
	app.directive('slideSectionHeader', function(){
		 return {
			 restrict: 'E',
			 templateUrl: '/partials/slide-section-header.html'
		 };
	});
	
	app.directive('slideEditedPlaceholder', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/slide-edited-placeholder.html'
		}
	});
	
	app.directive('slideTestSectionHeader', function(){
		return{
			restrict: 'E',
			templateUrl: '/partials/slide-test-section-header.html'
		}
	});
	
	app.directive('slideAddNewQuestion', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/slide-add-new-question.html'
		}
	});
	
	app.directive('slideAnswerBankItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/slide-answer-bank-item.html'
		}
	});
	
	app.directive('slideQuestionFeedback', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/slide-question-feedback.html'
		}
	});
	
	app.directive('clearfix', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/clearfix.html'
		}
	});

})();