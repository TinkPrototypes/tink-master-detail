'use strict';
   angular.module('tinkApp')
 .directive('tinkMasterDetailView',[function () {
 	return {
 		restirct:'E',
 		templateUrl:'templates/tinkMasterDetailView.html',
 		transclude:'true',
 		replace:true,
 		scope:true,
 		priority:99,
 		controller:function($scope,$element){
 			var ctrl = this;
 			var $element={listView:undefined,contentView:undefined,main:undefined};
 			var $split={first:undefined,second:undefined,bar:undefined};
 			var $direction='vertical';

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

 			this.setInitSize = function(size){
 				size = parseInt(size);  
 				if(size >=10 && size <= 90 && $element.listView && $element.contentView){
 				$split.first.width(size-1+'%');
	    		$split.second.width((100-size)+'%');
	    		$split.bar.css('left','calc('+size+'% - 3px)');
 				}
 			}

 			this.setVertical = function(){
 				$direction = 'vertical';
 			}

 			this.setHorizontal = function(){
 				$direction = 'horizontal';
 			}

 			this.setMain = function(element){
 				$element.main = element;
 			}

 			function addview(element){
 					//check if this is the first or the second view !
	 				if($split.first === null || $split.first === undefined){
	 					$split.first = $(element);
	 					$split.bar = $('<div class="split-handle"></div>');
	 					$(element).after($split.bar);
	 				}else if($split.second === null || $split.second === undefined){
	 					$split.second = $(element);
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

	    function changeX(e){
	    	var pageX = pointerEventToXY(e).x;
	    	var x = (pageX-$split.first.offset().left)/$element.main.outerWidth(true) *100;
	    	if(x> 10 && x < 90){
	    		$split.first.width(x-1+'%');
	    		$split.bar.css('left','calc('+x+'% - 3px)');
	    		$split.second.width((100-x)+'%');
	    	}
	    	
	    }

	    function changeY(e){
	    	var pageY = pointerEventToXY(e).y;
	    	var y = (pageY-$split.first.offset().top)/$element.main.outerHeight(true) *100;
	    	$split.first.height(y-1+'%');
	    	$split.bar.css('top','calc('+y+'% - 3px)');
	    	$split.second.height((100-y)+'%');
	    }

 			this.addReziseEvent = function(){
 				$split.bar.bind('mousedown touchstart',function(e){
				    $(document).bind('mousemove touchmove',function (e) {
				    	if($direction==='vertical'){
				    		$('html').addClass('col-resize');
				    		changeX(e);

				    	}else if($direction ==='horizontal'){
				    		$('html').addClass('row-resize');
				    		changeY(e);
				    	}
				    	return false;
				    });
				    $(document).bind('mouseup touchend',function(){
	 					//var x = parseInt($split.bar.css('left'))/$(document).innerWidth() *100;
	 					//$split.bar.css('left','calc('+x+'% + 3px)');
	 					$('html').removeClass('row-resize').removeClass('col-resize');
	 					$(document).unbind('mousemove touchmove mouseup touchend');
	 					return false;
	 				})
				    return false;
 				})
 			}

 			this.removeResizeEvent = function(){
 				$split.bar.unbind('mousedown touchstart');
 			}
 		},
 		link:function(scope,elem,attr,ctrl){
 			ctrl.setMain($(elem));
 			if(attr.tinkSplitViewDirection){
 				if(attr.tinkSplitViewDirection === 'horizontal'){
 					elem.addClass('split-view-horizontal');
 					ctrl.setHorizontal();
 				}else{
 					elem.addClass('split-view-vertical');
 					ctrl.setVertical();
 				}
 			}else{
 				elem.addClass('split-view-vertical');
 				ctrl.setVertical();
 			}

 			if(attr.tinkInitSize){
 				ctrl.setInitSize(attr.tinkInitSize);
 			}

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