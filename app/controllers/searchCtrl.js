// Dependacy added for the Invoice Factory

var app = angular.module('SearchCtrlMod',['taskService']);

// Add the Factory name to the controller
app.controller('SearchCtrl', function($scope, Task, $routeParams, $window) {

   $scope.User = {};
   $scope.errorMessage = '';

$scope.preloader = true;

$scope.reloadRoute = function() {
  $scope.clientNameFilter = '';
   $window.location.reload();
}

// Access factory and assign the returned data
Task.all()
.success(function(data) {
    
    $scope.uniqueClientNames = clientNames(data);
    // console.log($scope.uniqueClientNames)
    $scope.entries = data;
    
$scope.preloader = false;


})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});


});

// Filter unique client names
var clientNames  = function (data){
   
   var uniqueClients = [];
    
    for (var key in data) {
        
    if (uniqueClients.indexOf(data[key].clientName) == -1 && data[key].clientName != 'undefined') {
        uniqueClients.push(data[key].clientName);
    }
      
    }
    
    // Sort Array
    uniqueClients.sort();
    
    return uniqueClients;

}
