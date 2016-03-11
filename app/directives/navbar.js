app.directive('navbar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'app/views/partials/navbar.html' 
  }; 
});