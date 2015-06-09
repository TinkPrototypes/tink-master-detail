 'use strict';
  angular.module('tinkApp')
 .directive('tinkListView',[function () {
 	return {
 		require:['tinkListView','^tinkMasterDetailView'],
 		restirct:'E',
 		templateUrl:'templates/tinkListView.html',
 		scope:{
 			tinkActiveItem:'=',
 			itemChange:'&'
 		},
 		transclude:true,
 		controller:function($scope){
 			var ctrl = this;
 			var items = {};
 			var activeItem;
 			this.setActiveItem=function(item){
 				if(activeItem === item){
 					return;
 				}
 				if(activeItem){
 					//disable item
 				}

 				activeItem = item;
 				$scope.itemChange({

 				});
 			};
 			this.getActiveItem=function(){
 				return activeItem;
 			};
 			this.addItem=function(item){
 				if(!items[item.id]){
 					items[item.id] = {element:item.element,active:false};
 				}
 			};
 			this.removeItem=function(){
 				if(items[item.id]){
 					delete items[item.id];
 				}
 			};


 		},
 		link:function(scope,elem,attr,ctrl){
 			var ctrlList = ctrl[0];
 			var ctrlListView = ctrl[1];

 			ctrlListView.setListView(elem);
 			scope.$watch('tinkActiveItem',function(newData,oldData){
 				ctrlList.setActiveItem(newData);
 			});

 		}
 	}
 }]);