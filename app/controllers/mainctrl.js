var app = angular.module('mainCtrlModule',[]);

app.controller('MainController', ['$scope', 'Auth', '$location',  function($scope,Auth, $location) {
  

$scope.buttonClick = function(){

	if ($scope.buttonState == true){
		$scope.buttonState = false;
		console.log($scope.buttonState)
		
	} else {
		$scope.buttonState = true;
	}
	
};





 //$scope.loggedIn = false;
// Watch if Admin Logs in an redirects to homepage
// $scope.$watch(Auth.isLoggedIn, function (value) {


//     if(value) {
//       $scope.loggedIn = true;
//       console.log("Connect");
//       $location.path('/home');
//       //Do something when the user is connected
//     }

  // }, true);

// console.log($scope);

}]);

