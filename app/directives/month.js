app.directive('month', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      customMonth : '=',
      filterYear: '=',
      filterMonth: '='
    }, 
    templateUrl: 'app/views/partials/month.html',
     link: function(scope, element, attrs) {
    // here is the problem, data is really undefined
    // console.log(scope.customMonth);
    // console.log(scope);
}
  }; 
});