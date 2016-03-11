angular.module('taskService', [])

// Create Invoice Factory object
.factory('Task', function($http){

	var taskFactory = {};

// Create post factory to post data to api
	taskFactory.create = function(taskData){

		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/new-task',taskData)
	}

// Create get factory to retrieve data from api
	taskFactory.all = function(){

		return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/tasks');
	}

	return	taskFactory;

});
