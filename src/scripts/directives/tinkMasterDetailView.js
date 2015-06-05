   angular.module('tinkApp')
 .directive('tinkMasterDetailView',[function () {
 	return {
 		restirct:'E',
 		templateUrl:'templates/tinkMasterDetailView.html',
 		transclude:'true',
 		scope:true,
 		controller:function(){
 			var $element={listView:undefined,contentView:undefined};
 			this.setListView = function(element){
 				$element.listView = element;
 			}
 			this.setContentView = function(element){
 				$element.contentView = element;
 			}
 		},
 		link:function(scope,elem,attr,ctrl){
 			 scope.$on('$destroy',function handleDestroyEvent() {
 			 	//handle destory stuff unbind etc
 			 });
 		}
 	}
 }]);