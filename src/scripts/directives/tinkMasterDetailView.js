'use strict';
   angular.module('tinkApp')
 .directive('tinkMasterDetailView',[function () {
 	return {
 		restirct:'E',
 		templateUrl:'templates/tinkMasterDetailView.html',
 		transclude:'true',
 		scope:true,
 		priority:99,
 		controller:function($scope){
 			var ctrl = this;
 			var $element={listView:undefined,contentView:undefined};
 			var $split={first:undefined,second:undefined,bar:undefined};
 			this.setListView = function(element){
 				//there can only be one listview
 				if($element.listView !== null && $element.listView !== undefined){
 					//give a warning messages for the developers
 					console.warn('there is already a list view !');
 				}else{
 					//set the listview
 					$element.listView = $(element);
 					addview($element.listView);
 				}					
 			}

 			function addview(element){
 					//check if this is the first or the second view ! 
	 				if($split.first === null || $split.first === undefined){
	 					$split.first = $(element).find('.split-pane');
	 					//if we have the first view add the resize bar.
	 					$split.first.css('position','relative');
	 					$split.bar = $('<div class="split-resize"></div>');
	 					$split.first.append($split.bar);
	 				}else if($split.second === null || $split.second === undefined){
	 					$split.second = $(element).find('.split-pane');
	 					//Add the resize event if all the panes are added.
	 					ctrl.addReziseEvent();	
	 				}else{
	 					console.warn('there is already a first and second element !');
	 				}
 			}
 			this.setContentView = function(element){
 				//there can only be one listview
 				if($element.contentView !== null && $element.contentView !== undefined){
 					//give a warning messages for the developers
 					console.warn('there is already a content view !');
 				}else{
 					//set the listview
 					$element.contentView = $(element);
 					addview($element.contentView);
 				}	
 			}

 			 var pointerEventToXY = function(e){
	      var out = {x:0, y:0};
	      if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
	        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        out.x = touch.pageX;
	        out.y = touch.pageY;
	      } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
	        out.x = e.pageX;
	        out.y = e.pageY;
	      }
	      return out;
	    };

 			this.addReziseEvent = function(){
 				$split.bar.bind('mousedown touchstart',function(e){
				    $(document).bind('mousemove touchmove',function (e) {
				    	var pageX = pointerEventToXY(e).x;
				    	var x = (pageX-$split.first.offset().left)/$(document).width() *100;
				    	//alert(pageX)
				    	$split.first.width(x+'%');
				    	$split.second.width((100-x)-2+'%');
				    });
				    return false;
 				})
 				$split.first.bind('mouseup touchend',function(){
 					$(document).unbind('mousemove touchmove');
 				})
 			}

 			this.removeResizeEvent = function(){
 				$split.first.unbind('mousedown touchstart');
 			}
 		},
 		link:function(scope,elem,attr,ctrl){

 			

			scope.$on('$destroy',function handleDestroyEvent() {
				ctrl.removeResizeEvent();
			});

			scope.addResizer = function(){
			 	var x = e.pageX - $('#sidebar').offset().left;
				if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
				  $('#sidebar').css("width", x);
				  $('#main').css("margin-left", x);
				}
			}

 		}
 	}
 }]);