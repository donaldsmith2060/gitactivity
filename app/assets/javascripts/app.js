angular.module('gitactivity', [])
.controller('ActivityController', ["$scope", "$http",
	function($scope, $http){
		 
	$scope.activities=[];
        
        $scope.query = function(){
        var url='/user/'+$scope.user;
	  $http.get(url).then( function(response) {
              $scope.activities.splice(0,$scope.activities.length);
              for(var i=0;i<response.data.length;i++){
                  $scope.activities.push(response.data[i]);
              }

          });


	}



	}]);
