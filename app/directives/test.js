app.directive('test', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'app/views/partials/test.html' 
  }; 
});