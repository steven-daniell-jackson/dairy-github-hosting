app.directive('taskpanel', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customTaskData : '='
    }, 
    templateUrl: 'app/views/partials/taskPanel.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customTaskData);
}
  }; 
});