 'use strict';
  angular.module('tinkApp')
 .directive('tinkListView',[function () {
 	return {
 		require:'^tinkMasterDetailView',
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
 			ctrl.setListView(elem);
 			scope.$watch('tinkActiveItem',function(newData,oldData){
 				ctrl.setActiveItem(newData);
 			});

 		}
 	}
 }]);