// Dependacy added for the Invoice Factory

var app = angular.module('LatestWorkCtrlModule',['taskService']);

// Add the Factory name to the controller
app.controller('LatestWorkCtrl', function($scope, Task) {
  
 $scope.User = {};
$scope.errorMessage = '';

// $scope.name = "testsasd";
$scope.preloader = true;

// Access factory and assign the returned data
Task.all()
.success(function(data) {
            $scope.entries = data;
            $scope.entries.reverse()
            // console.log($scope.entries.reverse())
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
     // when landing on the page, get all todos and show them
    // $http.get('api/invoices')
        
 
});