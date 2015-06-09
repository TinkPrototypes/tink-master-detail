 'use strict';
  angular.module('tinkApp')
 .directive('tinkListItem',[function () {
 	return {
 		require:'^tinkListView',
 		restirct:'EA',
 		scope:{
 			tinkListItem:'='
 		},
 		link:function(scope,elem,attr,ctrl){
 			var id = scope.tinkListItem;
 			if(id){
 				ctrl.addItem(id);
 			}else{
 				return;
 			}
 			var object = {id:id,elem:$(elem)};

 			scope.$on('destroy',function(){
 				ctrl.removeItem(id);
 			})
 			$(elem).bind('click',function(){
 				ctrl.setItem(object);
 			})
 		}
 	}
 }]);