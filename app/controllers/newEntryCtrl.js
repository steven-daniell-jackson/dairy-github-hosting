// Dependacy added for the Invoice Factory
var app = angular.module('addNewTaskeModule',['taskService']);

// Create controller and include Factory object
app.controller('addNewTaskCtrl', function($scope, Task) {
	
// Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

	platform: $scope.platform,
	clientname: $scope.clientname,
	url: $scope.url,
	workdone: $scope.workdone,
	assignedby: $scope.assignedby,
	date: $scope.date,
	monthfilter: $scope.monthfilter,
	yearfilter: $scope.yearfilter,
	comments: $scope.comments

}


// Call factory and submit the formData for processing
Task.create(formData)

 // If successful print returned message form API else print error
 .success(function(data) {

// Clear form
$scope.platform = '';
$scope.clientname = '';
$scope.url = '';
$scope.workdone = '';
$scope.hours = '';
$scope.date = '';
$scope.monthfilter = '';
$scope.yearfilter = '';
$scope.comments = '';

// Data binding on status to log API returned message
$scope.status = data.message;
console.log($scope.status);
})
 .error(function(data) {
 	console.log('Error: ' + data);
 });
}

}

});

