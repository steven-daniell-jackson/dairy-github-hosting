// Dependacy added for the Invoice Factory

var app = angular.module('ArchiveCtrlMod',['taskService']);

// Add the Factory name to the controller
app.controller('ArchiveCtrl', function($scope, Task, $routeParams, $location ) {

   $scope.User = {};
   $scope.errorMessage = '';

   // $scope.name = "testsasd222";.

   $scope.preloader = true;

// Get the page location and strip the year. and month from it
$scope.location = $location.path();
$scope.year = $scope.location.substr(9, 4);
$scope.filterMonth = $scope.location.substr(14);

// debug location
// console.log($scope.year);
// console.log($scope.filterMonth);



// Access factory and assign the returned data
Task.all()
.success(function(data) {
    $scope.entries = data;
    $scope.preloader = false;

// Self activating function to get months
$scope.months = [];

(function () {

// Loop through the invoice JSON object returned from api
	for (x in $scope.entries) {

// If the year matches the year in the url. Find the months
     if ($scope.entries[x].yearFilter == $scope.year){
    // Check to see if month already exists

    // console.log($scope.entries[x])
    if ($scope.months.indexOf($scope.entries[x].monthFilter) == -1) {

        $scope.months.push($scope.entries[x].monthFilter);

    }
}





}

})();



})
// If error on database connection. Return error message
.error(function(data) {
    console.log('Error: ' + data);
});


});
