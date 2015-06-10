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
 		replace:true,
 		controller:function($scope){
 			var ctrl = this;
 			var items = {};
 			var activeItem;
 			function setElementActive(item){
 				if(item === undefined || item === null){
 					ctrl.unselect();
 				}
 				if(!items[item.id]){
 					return;
 				}
 				if(activeItem && activeItem.id === item.id){
 					return;
 				}
 				if(activeItem){
 					//disable item
 					$(activeItem.elem).removeClass('active');
 				}	

 				$scope.itemChange({
 					$active:item.id
 				});

 				activeItem = item;
 				$(activeItem.elem).addClass('active');

 			};
 			this.unselect = function(){
 				if(activeItem){
 					$(activeItem.elem).removeClass('active');
 					activeItem = undefined;
 				}
 			};
 			this.getActiveItem=function(){
 				return activeItem;
 			};
 			this.setElementActive = function(id){
 				if(items[id]){
 					setElementActive(items[id]);
 				}else{
 					activeItem = {id:id};
 				}
 			}
 			this.setActiveItem = function(id){
 				$scope.tinkActiveItem = id;
 			}
 			this.addItem=function(item){
 				if(!items[item.id]){
 					items[item.id] = item;
 					if(activeItem && item.id === activeItem.id){
 						activeItem = null;
 						ctrl.setElementActive(item.id);
 					}
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
 				ctrlList.setElementActive(newData);
 			});

 		}
 	}
 }]);