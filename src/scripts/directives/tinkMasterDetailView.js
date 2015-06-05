   angular.module('tinkApp')
 .directive('tinkMasterDetailView',[function () {
 	return {
 		restirct:'E',
 		templateUrl:'templates/tinkMasterDetailView.html',
 		transclude:'true',
 		scope:true,
 		controller:function(){
 			var $element={listView:undefined,contentView:undefined,};
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
 			 scope.addResizer = function(){
 			 	var x = e.pageX - $('#sidebar').offset().left;
        if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
          $('#sidebar').css("width", x);
          $('#main').css("margin-left", x);
        }
 			 }

 			 /* //Hier komt het op neer :P 
					$('#split-bar').mousedown(function (e) {
					    e.preventDefault();
					    $(document).mousemove(function (e) {
					        e.preventDefault();
					        var x = e.pageX - $('#sidebar').offset().left;
					        if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
					          $('#sidebar').css("width", x);
					          $('#main').css("margin-left", x);
					        }
					    })
					});
					$(document).mouseup(function (e) {
					    $(document).unbind('mousemove');
					});
 			 */
 		}
 	}
 }]);