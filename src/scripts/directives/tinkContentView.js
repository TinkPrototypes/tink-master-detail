'use strict';
  angular.module('tinkApp')
 .directive('tinkContentView',[function () {
 	return {
 		require:'^tinkMasterDetailView',
 		restirct:'E',
 		templateUrl:'templates/tinkContentView.html',
 		scope:true,
 		transclude:true,
 		link:function(scope,elem,attr,ctrl){console.log('viii')
 			ctrl.setContentView(elem);
 		}
 	}
 }]);