  angular.module('tinkApp')
 .directive('tinkListView',[function () {
 	return {
 		require:'^tinkMasterDetailView',
 		restirct:'E',
 		templateUrl:'templates/tinkListView.html',
 		scope:true,
 		transclude:true,
 		link:function(scope,elem,attr,ctrl){
 			ctrl.setListView(elem);
 			if(attr.tinkInitSize){
 				ctrl.setListViewSize(attr.tinkInitSize);
 			}
 		}
 	}
 }]);