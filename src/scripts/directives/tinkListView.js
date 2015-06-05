  angular.module('tinkApp')
 .directive('tinkListView',[function () {
 	return {
 		require:'^tinkMasterDetailView',
 		restirct:'E',
 		templateUrl:'templates/tinkListView.html',
 		scope:true,
 		transclude:true,
 		link:function(){
 			console.log('go')
 		}
 	}
 }]);