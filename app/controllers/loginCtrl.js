var app = angular.module('LoginCtrlModule',['taskService']);

app.controller('LoginCtrl', ['$scope','Login',  'Auth', function($scope, Login, Auth) {
  
  
  // Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

username: $scope.username,
password: $scope.password

}


// Call factory and submit the formData for processing
   Login.create(formData)

 // If successful print returned message form API else print error
.success(function(data) {

    Auth.setUser($scope.username);
            $scope.status = data.message;
            console.log($scope.status);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  }

}
 
}]);
