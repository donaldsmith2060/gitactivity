angular.module('gitactivity', [])
.controller('ActivityController', 
	function($scope, $http){
		 
	$scope.activities=[];
        
        $scope.query = function(){
        let url='/user/'+$scope.user;
	  $http.get(url).then( function(response) {
              $scope.activities.splice(0,$scope.activities.length);
              for(let i=0;i<response.data.length;i++){
                  $scope.activities.push(response.data[i]);
              }

          });


	}



	});
